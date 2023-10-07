import { SET_IS_AUTH } from "../actions/actionsType"


const initialState = {
    isAuth: false
}



export default function routerReducer(state = initialState, action) {
    switch (action.type) {
        case SET_IS_AUTH:
            return {
                ...state,
                isAuth: !state.isAuth,
            }

        default: {
            return state
        }
    }
}