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
  /*
  createCheckout = async () => {

  }
  fetchCheckout = async () => {
    
  }
  addItemToCheckout = async () => {
    
  }
  removeItem = async () => {
    
  }
  */
  const fetchAllProducts = async () =>{ 
    const products = await client.product.fetchAll()
    setStoreState({products : products})
    
    }
  /*
  fetchProductWithHandle = async (handle) =>{ 

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
                    ...storeState,
                    fetchAllProducts : fetchAllProducts
                    
                    }}>

      { children  }

    </ShopContext.Provider>
  )

  

}

const ShopConsumer = ShopContext.Consumer

export {ShopConsumer, ShopContext }

export default StoreProvider

  