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
    
     <>
    <div className=' w-4/5 mx-auto my-10 py-4  flex items-center justify-around end text-sm font-light border-y-2' >
        <p className='basis-1/2 text-left '>Product</p>
        <p className='basis-1/4 text-center'>Quantity</p>
        <p className='basis-1/4 text-center' >Price</p>
        <p className='basis-1/4 text-center '>Total</p>
    </div> 
    <div className=' w-4/5 mx-auto'>
      <div className='w-full'>
        {storeData.checkout.lineItems.map((product, index) => 
        <CartItem 
          key={product.id}
          product = {product}
          index = {index} 
     
          />)}
         
      </div>
      <div className=' p-6  mt-2  '>
        <div className ='   w-full md:float-right border-t-2 p-4 '>
          <h2 className=' text-xl text-right'>Subtotal</h2>
          <p className='font-light text-lg py-2 text-right'>€{checkoutTotal}</p>
          <button className=' w-full block  mx-auto my-2 bg-gray-900 px-8 py-2 text-white'>Purchase</button>
        </div>
      </div>
    </div>
    </>
  )
  
}

export default Cart