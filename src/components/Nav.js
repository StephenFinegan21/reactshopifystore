import React from 'react'
import { Link } from 'react-router-dom'
import {FaShoppingBasket} from 'react-icons/fa'

const Nav = () => {
  return (
    <nav className='w-full'>
    <div>
       <Link to={'/'}>
           <h1 className='text-center py-10 text-[3rem] lg:text-[4rem]'>Breeze</h1>
        </Link>
    </div>
    <div className='w-4/5 mx-auto  grid grid-cols-3 md:w-1/3'>
        <li className='list-none text-center '>Sweaters</li>
        <li className='list-none text-center '>Shoes</li>
        <li className='list-none text-center '>Trousers</li>
        
    </div>
    <div className="absolute top-20 right-20 text-3xl text-slate-500">
    <Link to={'/cart'}><FaShoppingBasket/> </Link>
    </div>
</nav>
  )
}

export default Nav