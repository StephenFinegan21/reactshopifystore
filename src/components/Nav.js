import React, { useContext, useEffect, useState} from 'react'
import { StoreContext } from '../context/StoreContext'
import { Link } from 'react-router-dom'
import {FaShoppingBasket} from 'react-icons/fa'


const Nav = () => {

  const { storeData} = useContext(StoreContext)
  const [itemsInBasket, setItemsInBasket] = useState()

  //console.log(storeData.checkout.lineItems)

  useEffect(() => {
    if(storeData.checkout.lineItems){
    setItemsInBasket(storeData.checkout.lineItems.reduce((acc, current)=>
    acc + current.quantity, 0))
    }
  }, [storeData.checkout])
   
  return (
    <nav className='w-full'>
    <div>
       <Link to={'/'}>
           <h1 className='text-center py-10  text-[3rem] lg:text-[3rem] font-montserrat font-medium text-zinc-500'>Breeze</h1>
        </Link>
    </div>
    
    <div className="absolute top-20 right-20 text-3xl text-gray-700 bg-slate-200 w-12 h-12 flex items-center rounded-xl">
      <div className='w-4/5 mx-auto flex justify-center'>
        <Link to={'/cart'}><FaShoppingBasket/> </Link>
      </div>
     
    </div>
    <div className='absolute right-16 top-16 bg-red-300 w-6 rounded-full' >
        <p className='text-center'>{itemsInBasket}</p>
      </div>
    
</nav>
  )
}

export default Nav