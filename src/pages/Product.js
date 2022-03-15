
import React, {useEffect, useContext, useState} from 'react'
import { useParams } from "react-router-dom"

import { StoreContext } from "../context/StoreContext"

const Product = () => {

    const {fetchProductByHandle, product} = useContext(StoreContext)
    
    let params = useParams();
    console.log()

    useEffect(() => {
        fetchProductByHandle(params.handle)
        //console.log(fetchProductByHandle(params.handle))
        
      
    }, [params])

    if (!product.title) return 'loading'
      return (
              <>
                {
              
              <div className='w-4/5 mx-auto bg-white grid grid-cols-1 md:grid-cols-2 '>
                 {console.log(product)} 
                 
                      <img src={product.images[0].src} className='w-full py-10 md:w-11/12 ' />
                      <div>
                          <p>{product.title}</p>
                         
                      </div>
                     
              
               
              
              </div>
        }
          </>
            )
          

              
              
    
    
   


}

export default Product