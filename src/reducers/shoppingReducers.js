import { TYPES } from "../actions/shopingActions";


export const shoppingInitialState = {
  products: [
    { id: 1, name: "Producto1", price: 100 },
    { id: 2, name: "Producto2", price: 200 },
    { id: 3, name: "Producto3", price: 300 },
    { id: 4, name: "Producto4", price: 400 },
    { id: 5, name: "Producto5", price: 500 },
    { id: 6, name: "Producto6", price: 600 },
    { id: 7, name: "Producto7", price: 700 }
  ],
  cart:[]
};


export function shoppingReducer(state,action) {

    switch (action.type) {
        case TYPES.ADD_TO_CART:{

        }
            break;
        case TYPES.REMOVE_ONE_FROM_CART:{

        }

            break;
        case TYPES.REMOVE_ALL_FROM_CART:{

        }

            break;
        case TYPES.CLEAR_CART:{

        }

            break;
        default:
            return state
    }
    
}