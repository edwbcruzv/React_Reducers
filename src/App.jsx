import React from 'react'
import Contador from './Components/Contador'
import ContadorMejorado from './Components/ContadorMejorado'
import ShopingCart from './ShopingCart/ShopingCart'

function App() {
  return (
    <div>
      <h1>Reducers</h1>
      <ShopingCart/>
      <hr />
      <Contador/>
      <ContadorMejorado/>
    </div>
  )
}

export default App