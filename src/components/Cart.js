import React from 'react'
import { useContext, useEffect, useState } from "react";
import { StoreContext } from '../context/StoreContext'

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
      {storeData.checkout.lineItems.map(product => 
        <p>{product.title}</p>)}
    </div>
  )
}

export default Cart