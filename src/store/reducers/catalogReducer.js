import { GET_CATEGORIES } from "../actions/actionsType"


const initialState = {
    registerInfo: null,
    user: null,
}



export default function catalogReducer(state = initialState, action) {
    switch (action.type) {

        case GET_CATEGORIES:
            return {
                ...state,
                user: action.payload,
            }
            default: {
                return state
            }
        }
        

}