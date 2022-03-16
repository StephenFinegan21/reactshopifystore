import React from 'react'
import { Link } from 'react-router-dom'
import {FaShoppingBasket} from 'react-icons/fa'

const Nav = () => {
  return (
    <nav className='w-full'>
    <div>
       <Link to={'/'}>
           <h1 className='text-center py-10  text-[3rem] lg:text-[3rem] font-montserrat font-medium text-zinc-500'>Breeze</h1>
        </Link>
    </div>
    
    <div className="absolute top-20 right-20 text-3xl text-slate-500">
    <Link to={'/cart'}><FaShoppingBasket/> </Link>
    </div>
</nav>
  )
}

export default Nav