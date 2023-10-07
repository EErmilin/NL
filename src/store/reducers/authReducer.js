import { SET_USER_PROFILE } from "../actions/actionsType"


const initialState = {
    user: null
}



export default function authReducer(state = initialState, action) {
    switch (action.type) {

        case SET_USER_PROFILE:
            return {
                ...state,
                user: action.payload,
            }

        default: {
            return state
        }
    }
}