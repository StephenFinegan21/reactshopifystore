import React from 'react'
import { useContext } from "react";
import { StoreContext } from '../context/StoreContext'
import CartItem from './CartItem';

  const Cart = () => {

    const { storeData} = useContext(StoreContext)
    
    //Check that the checkout object is not empty
    if(!storeData.checkout.lineItems){
      return(
        'loading'
      )
    }
    return (
     
    <div>
      
      {storeData.checkout.lineItems.map((product, index) => 
        <CartItem 
          product = {product}
          index = {index} />

      )}
    </div>
  )
}

export default Cart