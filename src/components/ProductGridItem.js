import React from 'react'
import { Link } from 'react-router-dom'

const ProductGridItem = ({product}) => {
  return (
        <div 
            className='mb-60 my-10' 
            key={product.handle}>
                    
            
            <Link to={`/product/${product.handle}`}>
                    <img src={product.images[0].src } className='w-full md:w-11/12 ' />
                    <div className='my-10'>
                        <p>{product.handle}</p>
                        <p>€{product.variants[0].price}</p>
        </div>
            </Link>
        </div>
  )
}

export default ProductGridItem