
import React, {useEffect, useContext, useState} from 'react'
import { useParams } from "react-router-dom"
import { StoreContext } from "../context/StoreContext"

const Product = () => {

    const {fetchProductByHandle, addItemToCheckout,  storeData} = useContext(StoreContext)
    const [quantity, setQuantity] = useState(1)
    const [buttonText, setButtonText] = useState('Add to Cart')

    const handleChange = (event) =>{
      setQuantity(event.target.value)
    }

    const handleSubmit = () => {
      
      addItemToCheckout(storeData.product.variants[0].id, quantity)
      .catch((err) => {
        console.log(err)
       })
       setButtonText('Added to Cart')
    }

    useEffect(() => {
      setTimeout(() => {
        setButtonText('Add to Cart')
      }, 3000)
     
    }, [buttonText])
    
    let params = useParams(); //Gets the handle from the url to fetch the correct product
  
    useEffect(() => {
        fetchProductByHandle(params.handle) //Fetch the product - pass in the handle from the url
        
       }, [params.handle])
      
    //Checks that the product object is not empty
     if (!storeData.product.images) {
        return <p className='text-center'>Loading</p>
     }
     
     return (
      <>
        <div className='w-1/2  mx-auto bg-white grid grid-cols-1 md:grid-cols-2 '>
          
          <img src={storeData.product.images[0].src} className='w-1/2 py-10 block mx-auto' alt = 'product' />
            
          <div>
            <div>
                <p className=' py-10 text-[1rem] lg:text-[2rem]'>{ storeData.product.title}</p>
    
                <input className=' w-20 h-20 border-2 text-center' type="text" min='0' max='10' name="quantity" placeholder={quantity} onChange={handleChange} />
             
                <button className='block my-2  w-36 h-12 bg-gray-900 hover:bg-gray-600  text-white' onClick={ handleSubmit }>{buttonText}</button>
              </div>      
              
         
              </div>
        </div>
      </>
            )
    }
    

export default Product