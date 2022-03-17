import React from 'react'

import { useContext, useEffect } from "react";
import { StoreContext } from '../context/StoreContext'
import ProductGridItem from '../components/ProductGridItem';

const Home = () => {

    const {storeData, fetchAllProducts} = useContext(StoreContext)
    
    useEffect(() => {
        fetchAllProducts() //On page load Fetch all the products in the store
    }, []) // eslint-disable-line react-hooks/exhaustive-deps
    
    //Wait until the data loads before rendering the data
    if (!storeData.products) return <p className='text-center'>Loading</p>
    
    return (
    <>
    { /*
    <div className='w-4/5 mx-auto  grid grid-cols-3 md:w-1/3'>
        <li className='list-none text-center '>Sweaters</li>
        <li className='list-none text-center '>Shoes</li>
        <li className='list-none text-center '>Trousers</li>
    </div>
     */ } 
    <div className='w-4/5 mx-auto bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 font-montserrat font-light text-zinc-400'>
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