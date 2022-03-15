

import { useContext, useEffect, useState } from "react";
//import { ShopContext } from "./context/ShopContext";
import { StoreContext } from './context/StoreContext'




function App() {

 
  const {fetchAllProducts, products} = useContext(StoreContext)
 //console.log(fetchAllProducts)
  

  useEffect(() => {
   fetchAllProducts()
   console.log('fetched data is ',products)

  }, [products])





  
//const {fetchAllProducts, products} = useContext(ShopContext)

  return (
    <div className="App">
  
        <h3> Lets go for a beer? </h3>
  
    </div>
  );
}

export default App;
