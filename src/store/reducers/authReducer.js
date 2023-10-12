import { SET_USER_PROFILE, SET_REGISTER_DATA, CLEAR_USER_DATA } from "../actions/actionsType"


const initialState = {
    registerInfo: null,
    user: null,
}



export default function authReducer(state = initialState, action) {
    switch (action.type) {

        case SET_USER_PROFILE:
            return {
                ...state,
                user: action.payload,
            }
        case SET_REGISTER_DATA:
            return {
                ...state,
                registerInfo: action.payload,
            }
        case CLEAR_USER_DATA:
            return {
                ...state,
                user: null
            }


        default: {
            return state
        }
    }
}