import { GET_CATEGORIES, GET_PRODUCTS, GET_PRODUCT } from "../actions/actionsType"


const initialState = {
    categories: null,
    products: null,
    product: null

}

export default function catalogReducer(state = initialState, action) {
    switch (action.type) {

        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload,
            }
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
            }
        case GET_PRODUCT:
            return {
                ...state,
                product: action.payload,
            }
        default: {
            return state
        }
    }


}