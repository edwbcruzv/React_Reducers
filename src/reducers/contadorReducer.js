import { TYPES } from '../actions/contadorActions'


export const contadorInitialState = { contador: 0 }

export const contadorInit = () => {
    return {
        contador: contadorInitialState.contador + 100
    }
}

export function contadorReducer(state, action) {
    switch (action.type) {
        case TYPES.INCREMENT:
            return { contador: state.contador + 1 }
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
            return contadorInitialState
            break;
        default:
            return state
            break;
    }
}