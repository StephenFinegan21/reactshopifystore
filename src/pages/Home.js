import React from 'react'

import { useContext, useEffect } from "react";
import { StoreContext } from '../context/StoreContext'
import ProductGridItem from '../components/ProductGridItem';

const Home = () => {

    const {storeData, fetchAllProducts} = useContext(StoreContext)
    
    useEffect(() => {
        fetchAllProducts() //On page load Fetch all the products in the store
    }, [])
    
    //Wait until the data loads before rendering the data
    if (!storeData.products) return 'loading'
    
    return (
    <>
    <div className='w-4/5 mx-auto bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {storeData.products.map((p) => 
            <ProductGridItem
                product = {p}
                key={p.handle} />
                 )}
    </div>
    </>
         );
          
    
        }

export default Home