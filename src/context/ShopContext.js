import React, { Children } from 'react'
import { createContext, useState } from 'react';
import Client from 'shopify-buy'

const client = Client.buildClient({
  domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
  storefrontAccessToken: process.env.REACT_APP_SHOPIFY_API
});

 const ShopContext = createContext()

const StoreProvider = ({ children}) => {



  const [ storeState, setStoreState ] = useState(
    {
      product: {},
      products: [],
      checkout: {},
      isCartOpen : false,
      isMenuOpen : false

    }
  )
  
  createCheckout = async () => {
    const checkout = await client.checkout.create()
    localStorage.setItem("checkout-id", checkout.id)
    setStoreState({checkout : checkout})
  }
 
  fetchCheckout = async () => {
    
  }
   /*
  addItemToCheckout = async () => {
    
  }
  removeItem = async () => {
    
  }
  */
  const fetchAllProducts = async () =>{ 
    const products = await client.product.fetchAll()
    console.log(products[0])
    setStoreState(
      {...storeState,
      products : products}
    )
    
    }
  
 
/*
  } 
  closeCart = async () =>{ 

  } 
  openCart = async () =>{ 

  } 
  closeMenu = async () =>{ 

  } 
  openMenu = async () =>{ 

  } 
  */

  return (
    <ShopContext.Provider value = {{
                    storeState,
                    
                    
                    }}>

      { children  }

    </ShopContext.Provider>
  )

  

}

const ShopConsumer = ShopContext.Consumer

export {ShopConsumer, ShopContext }

export default StoreProvider

  