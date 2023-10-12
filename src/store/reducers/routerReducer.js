import { localesFake } from "../../App"
import { SET_IS_AUTH, SET_LOCALES, SET_LOCALE } from "../actions/actionsType"


const initialState = {
    isAuth: false,
    locales: [],
    locale: localesFake.find((locale=> locale.id == localStorage.getItem('locale'))),
}



export default function routerReducer(state = initialState, action) {
    switch (action.type) {
        case SET_IS_AUTH:
            return {
                ...state,
                isAuth: !state.isAuth,
            }

        case SET_LOCALES:
            return {
                ...state,
                locales: action.payload,
            }
        case SET_LOCALE:
            return {
                ...state,
                locale: action.payload,
            }

        default: {
            return state
        }
    }
}