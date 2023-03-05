import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div className='border-[1px] border-red-400'>
        <p>{product.title}</p>
    </div>
  )
}

export default ProductCard