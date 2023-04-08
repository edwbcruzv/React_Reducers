import React, { useReducer} from 'react'
import { TYPES } from '../actions/contadorActions'
import { contadorInit, contadorInitialState, contadorReducer } from '../reducers/contadorReducer'

function ContadorMejorado() {

    const [state, dispatch] = useReducer(contadorReducer, contadorInitialState, contadorInit)
    function sumar() { dispatch({ type: TYPES.INCREMENT }) }
    function sumar_5() { dispatch({ type: TYPES.INCREMENT_5 }) }
    function reset() { dispatch({ type: TYPES.RESET})}
    function restar() { dispatch({ type: TYPES.DECREMENT }) }
    function restar_5() { dispatch({ type: TYPES.DECREMENT_5}) }

  return (
    <div style={{textAlign:"center"}}>
        <h2>ContadorMejorado reducer</h2>
        <nav>
              <button onClick={sumar_5}>+5</button>
              <button onClick={sumar}>+</button>
              <button onClick={reset}>Reset</button>
              <button onClick={restar}>-</button>
              <button onClick={restar_5}>-5</button>
        </nav>
        <h3>{state.contador}</h3>
    </div>
  )
}

export default ContadorMejorado