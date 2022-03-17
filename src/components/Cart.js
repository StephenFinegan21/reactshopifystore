import React from 'react'
import { useContext, useState , useEffect} from "react";
import { StoreContext } from '../context/StoreContext'
import CartItem from './CartItem';

  const Cart = () => {

    const { storeData} = useContext(StoreContext)
   const [checkoutTotal, setCheckoutTotal] = useState()
    
   useEffect(() => {
    if(storeData.checkout.lineItems){
    setCheckoutTotal(storeData.checkout.lineItems.reduce((acc, current)=>
    acc + current.quantity * current.variant.price, 0))
    }
  }, [])

  useEffect(() => {
    if(storeData.checkout.lineItems){
    setCheckoutTotal(storeData.checkout.lineItems.reduce((acc, current)=>
    acc + current.quantity * current.variant.price, 0))
    }
  }, [storeData.checkout])
  
    //Check that the checkout object is not empty
    if(!storeData.checkout.lineItems){
      return(
        'loading'
      )
    } 
      
     

    
    return (
    <div className='grid grid-cols-4 w-4/5 mx-auto'>
      
    <div className='col-span-3 '>
      {storeData.checkout.lineItems.map((product, index) => 
        <CartItem 
          key={product.id}
          product = {product}
          index = {index} 
     
          />
     

      )}
         
    </div>
    <div className='col-span-1 p-6 border-2 '>
      <div className ='w-4/5 mx-auto'>
        <h2 className=' text-lg'>Checkout</h2>
        <p>{checkoutTotal}</p>
        <button className=' w-full block  mx-auto bg-gray-900 px-8 py-2 text-white'>Purchase</button>
      </div>
      </div>
    </div>
  )
}

export default Cart