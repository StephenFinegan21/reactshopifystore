import React from 'react'
import { Link } from 'react-router-dom'

const ProductGridItem = ({ product }) => { //product details for each element passed in as props
  return (
        <div 
            className='mb-60 my-10' 
            key={product.handle}>
              {/*Each element wrapped in a link to that Product */}
              <Link to={`/product/${product.handle}`}>
                    <img src={product.images[0].src } className='w-full md:w-11/12' alt='product' />
                    <div className='my-10'>
                        <p>{product.title}</p>
                        <p>€{product.variants[0].price}</p>
                    </div>
              </Link>
        </div>
  )
}

export default ProductGridItem