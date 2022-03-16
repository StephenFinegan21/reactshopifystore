
/*
** Handles the Store data and provides this data to the different components
** Data is:
    (1) The current checkout, if it exists 
    (2) List of all Products in the store
    (3) The current Product selected by the user
*/
import React, { createContext, useEffect, useReducer} from "react";
import Client from "shopify-buy";

//Shopify credentials for this store - stored in client variable
const client = Client.buildClient({
  domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
  storefrontAccessToken: process.env.REACT_APP_SHOPIFY_API
});

const StoreContext = createContext();


const StoreContextProvider = ({children}) =>  {

  const reducer = (state, action) => {
    switch (action.type) {
      
        case 'CHECKOUT_INIT': //Initialising a new Checkout
         return {
            ...state,
              checkout : action.payload
          };
          
        case 'CHECKOUT_FETCH': //Fetching an existing checkout
          console.log('fetch')
          return {
            ...state,
            checkout : action.payload
          };
          
        case 'FETCH_ALL_PRODUCTS': //Fetching all products in the store
          return {
            ...state,
            product : {},
            products : action.payload
          };

        case 'FETCH_PRODUCT': //Fetch an individual project from the store
          return {
            ...state,
             product : action.payload
              
            };
         case 'ADD_ITEM_TO_CHECKOUT': //Add an item to the checkout
            return {
            ...state,
            checkout : action.payload
                
          };
       default:
          throw new Error();
      }
    };

  //Initialise the data as blank
  const initialData ={
    products : [],
    product : {},
    checkout : {}
  }

  //Data uses the useReducer hook and is stored in 'storeData' variable
  // 'storeData' is made available by the pages and components to fetch relevant data
  const [storeData, dispatch] = useReducer(
    reducer,
    initialData,
    );

  //Create a new Checkout if none exists
  useEffect(() => {
    if (!localStorage.checkout) {
      createCheckout()
    } else {
      fetchCheckout(localStorage.checkout)
    }
  }, [])




 const createCheckout = async () => {
    const checkout = await client.checkout.create(); //Create a new checkout using the Shopify store client
    localStorage.setItem("checkout", checkout.id); // set a variable in local storage called 'checkout' - value is the id of the shopify checkout just created
    dispatch({ type: "CHECKOUT_INIT", payload : checkout }); 
  };

  //Fetch checkout will run if a checkout alreay exists in local storage memory
 const fetchCheckout = async (checkoutId) => {
    client.checkout
      .fetch(checkoutId)
      .then((checkout) => {
        dispatch({ type: "CHECKOUT_FETCH", payload : checkout });
      })
      .catch((err) => console.log(err));
  };

  const addItemToCheckout = async (variantId, quantity) => {
    const lineItemsToAdd = [
      {
        variantId, //id of the product being added to checkout
        quantity: parseInt(quantity, 10),
      },
    ];
    const checkout = await client.checkout.addLineItems(
    storeData.checkout.id,
    lineItemsToAdd
    );
    dispatch({ type: "ADD_ITEM_TO_CHECKOUT", payload : checkout });
  };
  
  const fetchAllProducts = async () => {
    const products = await client.product.fetchAll();
    dispatch({ type: "FETCH_ALL_PRODUCTS", payload : products });
   
  };
  //Uses the 'handle' property of a product to fetch it
  const fetchProductByHandle = async (handle) => {  
    const product = await client.product.fetchByHandle(handle);
     dispatch({ type: "FETCH_PRODUCT", payload : product });
  };
  
  return (
  //Provider gives the child components (Everything in the <App /> ) access to the following data/functions)
      <StoreContext.Provider value= {{
        storeData,
        fetchAllProducts : fetchAllProducts,
        fetchProductByHandle : fetchProductByHandle,
        createCheckout : createCheckout,
        fetchCheckout : fetchCheckout,
        addItemToCheckout : addItemToCheckout
        }} >
        { children }
        </StoreContext.Provider>
    )

}

const ShopConsumer = StoreContext.Consumer;

export { ShopConsumer, StoreContext };
export default StoreContextProvider