import React, { useReducer, useState } from 'react'


const initialState = {contador:0}

const init = () =>{
    return{
        contador: initialState.contador +10
    }
}

const TYPES={
    INCREMENT: "INCREMENT",
    INCREMENT_5: "INCREMENT_5",
    DECREMENT: "DECREMENT",
    DECREMENT_5: "DECREMENT_5",
    RESET:"RESET"
}

function reducer(state,action) {
    switch (action.type) {
        case TYPES.INCREMENT:
            return {contador:state.contador + 1}
            break;
        case TYPES.DECREMENT:
            return { contador: state.contador - 1 }
            break;
        case TYPES.INCREMENT_5:
            return { contador: state.contador + 5 }
            break;
        case TYPES.DECREMENT_5:
            return { contador: state.contador - 5 }
            break;
        case TYPES.RESET:
            return { contador: state.contador = 0 }
            break;
        default:
            return state
            break;
    }
}


function Contador() {
    // const [count, setCount] = useState(0)
    // function sumar() { setCount(count + 1) }
    // function restar() { setCount(count - 1) }

    const [state, dispatch] = useReducer(reducer, initialState, init)
    function sumar() { dispatch({ type: TYPES.INCREMENT }) }
    function sumar_5() { dispatch({ type: TYPES.INCREMENT_5 }) }
    function reset() { dispatch({ type: TYPES.RESET})}
    function restar() { dispatch({ type: TYPES.DECREMENT }) }
    function restar_5() { dispatch({ type: TYPES.DECREMENT_5}) }

  return (
    <div style={{textAlign:"center"}}>
        <h2>Contador reducer</h2>
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

export default Contador