import React from 'react'
import { useContext, useState } from "react";
import { StoreContext } from '../context/StoreContext'
const CartItem = ({ product, index }) => {

    const { storeData, removeItemFromCheckout, updateCheckout} = useContext(StoreContext)
    const [quantity, setQuantity] = useState(0)

    const handleChange = (event) =>{
        
        setQuantity(event.target.value)
        event.preventDefault()
    }

  return (
    <>

    {console.log(storeData.checkout.lineItems)}
    <div className='w-4/5 mx-auto my-5 p-10  flex items-center justify-around' key={product.title}>
          <p >{product.quantity} x</p>
          <div className=' w-20'>
           <img src={product.variant.image.src } alt='product'  />
          </div>
          
          <p  >{product.title}</p>
          <p >€{product.variant.price}</p>
          <p >€{product.quantity * product.variant.price}</p>

          <div>
        <button onClick={ () => removeItemFromCheckout(storeData.checkout.lineItems[index].id)}>X</button>
        <input className='p-4 w-20 h-20' type="number" min='0' name="quantity" placeholder={product.quantity} onChange={handleChange}/>
        <button onClick={() => updateCheckout(storeData.checkout.lineItems[index].id, parseInt(quantity) )} > update</button>
          
        </div>
        </div>
        
      
    
    </>
  )
}

export default CartItem