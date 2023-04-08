import React, { useReducer } from 'react'
import { shoppingInitialState, shoppingReducer } from '../reducers/shoppingReducers'
import ProductItem from './ProductItem'
import './styles.css'

function ShopingCart() {
    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState )

    const {products,cart} = state
    console.log(products)

    function addToCart(id) {
        console.log(id)
    }
    function delFromCart() {
        
    }
    function clear() {
        
    }

  return (
    <div>
        <h2>Shoping Cart</h2>
        <h3>Productos</h3>
          <article className='box grid-responsive'>
            {products &&products.map((product,id)=> {
                return (<ProductItem key={id} data={product} addToCart={addToCart}/>)
                })}
          </article>
          <h3>Carrito</h3>
          <article className='box'></article>

    </div>
  )
}

export default ShopingCart