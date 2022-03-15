
import React, {createContext, useState} from "react";
import Client from "shopify-buy";

const client = Client.buildClient({
  domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
  storefrontAccessToken: process.env.REACT_APP_SHOPIFY_API
});


 const StoreContext = createContext();



const  StoreContextProvider = ({children}) =>  {

  const [storeState, setStoreState]= useState({
    products: [],
    product: {},
  }) 
    
  
  const fetchAllProducts = async () => {
    const products = await client.product.fetchAll();
    setStoreState({...storeState, products: products });
  };

  const fetchProductByHandle = async (handle) => {
    const product = await client.product.fetchByHandle(handle);
    setStoreState({ product: product });
    

    return product;
  };

 

     
    return (
      
        //Provider gives the child components access to the current authentication state
        <StoreContext.Provider value= {{
          ...storeState,
          fetchAllProducts : fetchAllProducts,
          fetchProductByHandle : fetchProductByHandle
          
        }}  >
            { children }
        </StoreContext.Provider>
    )

}

const ShopConsumer = StoreContext.Consumer;

export { ShopConsumer, StoreContext };
export default StoreContextProvider