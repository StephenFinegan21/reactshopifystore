

import { useContext, useEffect, useState } from "react";
import { ShopContext } from "./context/ShopContext";
import Client from 'shopify-buy'



function App() {

  const [ storeState, setStoreState ] = useState(
    {
      product: {},
      products: [],
      checkout: {},
      isCartOpen : false,
      isMenuOpen : false

    }
  )

  const fetchAllProducts = async () =>{ 
    const products = await client.product.fetchAll()
    console.log(products[0])
    setStoreState(
      {...storeState,
      products : products}
    )
    
    }

  useEffect(() => {
    fetchAllProducts()

  }, [])

const client = Client.buildClient({
  domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
  storefrontAccessToken: process.env.REACT_APP_SHOPIFY_API
});



  
//const {fetchAllProducts, products} = useContext(ShopContext)

  return (
    <div className="App">
  
        <h3> Lets go for a beer? </h3>
  
    </div>
  );
}

export default App;
