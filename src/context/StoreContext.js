
import {  createContext, useState, useEffect } from "react";
import Client from 'shopify-buy'

const client = Client.buildClient({
  domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
  storefrontAccessToken: process.env.REACT_APP_SHOPIFY_API
});


export const StoreContext = createContext()



 const StoreContextProvider = ( { children }) => {

    const [ storeState, setStoreState ] = useState(
        {
          product: {},
          products: [],
          checkout: {},
          isCartOpen : false,
          isMenuOpen : false
    
        }
      )

      useEffect(() => {
        if(localStorage.checkout_id){
          fetchCheckout(localStorage.checkout_id)
          
        }else{
          createCheckout()
          
        }
        
      }, [])

      useEffect(() => {
        console.log(storeState, 'is state')
      }, [storeState])


      const createCheckout = async () => {
        const checkout = await client.checkout.create()
        localStorage.setItem("checkout_id", checkout.id)
        setStoreState(
          {...storeState, checkout : checkout})}


      const  fetchCheckout = async (checkoutId) => {
        client.checkout
        .fetch((checkoutId))
        .then((checkout) => {
          setStoreState({
            ...storeState,
            checkout : checkout
          })
        })
          }


      const fetchAllProducts = async () =>{ 
        const products = await client.product.fetchAll()
        //console.log(products)
        setStoreState(
          {
            ...storeState,
            products : products
      
          }
        )
        
        
        }

        
    return (
      
        //Provider gives the child components access to the current authentication state
        <StoreContext.Provider value= {{
          fetchAllProducts : fetchAllProducts,
          createCheckout : createCheckout
        }}  >
            { children }
        </StoreContext.Provider>
    )

}

export default StoreContextProvider