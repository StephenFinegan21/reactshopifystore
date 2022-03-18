import React from 'react'
import { useContext, useState, useEffect } from "react";
import { StoreContext } from '../context/StoreContext'
import {GrFormClose} from 'react-icons/gr'
const CartItem = ({ product, index, getSub }) => {

    const { storeData, removeItemFromCheckout, updateCheckout} = useContext(StoreContext)
    const [quantity, setQuantity] = useState()
    const [cost, setCost] = useState()
    const [error, setError] = useState()
   

    
    const handleChange = (event) =>{
        const input = event.target.value
        if(input > 10){
           
            setError('max 10 items')
            return
        }
        else if(input % 1 !== 0){
            setError('Whole numbers only')
        }
        else{
            setError()
            setQuantity(event.target.value)
            
            event.preventDefault()
        }
        
    }

    useEffect(() => {
      
        setQuantity(product.quantity)
        setCost(quantity * product.variant.price)
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        updateCheckout(storeData.checkout.lineItems[index].id, parseInt(quantity) )
        if(quantity !== 0 && !isNaN(quantity)){
            setCost(quantity * product.variant.price)
           
        }
        
    }, [cost, quantity]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>

    {error && <div className='w-11/12 mx-auto text-center text-red-400 '><p>{error}</p></div>}


    <div className=' w-full mx-auto my-4 pb-2 flex items-center justify-around end' key={product.title}>
        <div className=' basis-1/2 text-center grid grid-cols-2  items-center'>
            <div>
                <p className='relative top-4 text-lg w-8  bg-slate-200 text-center rounded-full ' >{product.quantity}</p>
                <img src={product.variant.image.src } alt='product' className='w-1/2'/>
                <button className='relative bottom-6 bg-red-300 p-2 text-lg rounded-full'
                     onClick={ () => removeItemFromCheckout(storeData.checkout.lineItems[index].id)}>
                        <GrFormClose />
                </button>
            </div>
                <p>{product.title}</p>
          </div>
            
        <div className='basis-1/4 text-center'>
            <input className='mx-10 w-20 h-20 border-2 text-center' type="number" min='0' step='1' max='10' name="quantity" placeholder={product.quantity} 
                onChange={handleChange}/>
        </div>
        <p className='basis-1/4 text-center' >€{product.variant.price}</p>
        <p className='basis-1/4 text-center' >€{cost}</p>
    </div>
        
        
      
    
    </>
  )
}

export default CartItem