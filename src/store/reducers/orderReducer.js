import { SET_CART } from "../actions/actionsType"


const initialState = {
 cart: null
}



export default function orderReducer(state = initialState, action) {
    switch (action.type) {

        case SET_CART:
            return {
                ...state,
                cart: action.payload,
            }

        default: {
            return state
        }
    }
}