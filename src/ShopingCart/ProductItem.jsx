import React from 'react'

function ProductItem({data,addToCart}) {
    const {id,name,price} = data

  return (
    <div>
        <article className='box'>

        <h4>{name}</h4>
        <h5>${price}.00</h5>
        <button onClick={(id)=>addToCart(id)}>Agregar</button>
        </article>
    </div>
  )
}

export default ProductItem