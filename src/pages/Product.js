
import React, {useEffect, useContext} from 'react'
import { useParams } from "react-router-dom"
import { StoreContext } from "../context/StoreContext"

const Product = () => {

    const {fetchProductByHandle, addItemToCheckout,  storeData} = useContext(StoreContext)
    
    let params = useParams(); //Gets the handle from the url to fetch the correct product
  
    useEffect(() => {
        fetchProductByHandle(params.handle) //Fetch the product - pass in the handle from the url
        
       }, [params.handle])
      
    //Checks that the product object is not empty
     if (!storeData.product.images) {
        return 'loading'
     }
     
     return (
      <>
        <div className='w-4/5 mx-auto bg-white grid grid-cols-1 md:grid-cols-2 '>
          
          <img src={ storeData.product.images[0].src} className='w-full py-10 md:w-11/12 ' alt = 'product' />
              <div>
                <p className='text-center py-10 text-[1rem] lg:text-[2rem]'>{ storeData.product.title}</p>
                {storeData.product.variants &&
                <div>
                <button onClick={ () => addItemToCheckout(storeData.product.variants[0].id, 1)}>Add To Cart</button>
                
                </div>
                }  
              </div>
        </div>
      </>
            )
    }
    

export default Product