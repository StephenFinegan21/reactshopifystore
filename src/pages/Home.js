import React from 'react'

import { useContext, useEffect, useState } from "react";
//import { ShopContext } from "./context/ShopContext";
import { StoreContext } from '../context/StoreContext'
import { Link } from 'react-router-dom';
import ProductGridItem from '../components/ProductGridItem';



const Home = () => {

    const {fetchAllProducts, products} = useContext(StoreContext)
    
    useEffect(() => {
        fetchAllProducts()
        return () => {
            // cleanup
        };
    }, [fetchAllProducts])

    if (!products) return 'loading'
    
         return (
         <>
          {products && 
           <div className='w-4/5 mx-auto bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
           
               {products.map((p) => 
                    <ProductGridItem
                        product = {p}
                        key={p.title} />
                 )}
          </div>}
           </>
         );
          
     
       }

export default Home