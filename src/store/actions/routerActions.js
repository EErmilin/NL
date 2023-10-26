
import axios from "axios";
import axiosCustom from "../../axios/axiosCustom";
import axiosCustomTranslations from "../../axios/axiosCustomTranslations";
import { SET_IS_AUTH, SET_LOCALES,SET_LOCALE, SHOW_CARD } from "./actionsType";


export function setIsAuth() {
    return {
        type: SET_IS_AUTH,
    }
}

export function getChannel() {
    return async (dispatch) => {

        try {
            await axiosCustom("https://testapi.eu-nl.com/api/v1/channels?sort=id").then((resp) => {
            });

        } catch (e) {
            if (e.response) {
            }
        }
    };
}

export function getLocales() {
    return async (dispatch) => {

        try {
            const response = await axiosCustom("https://testapi.eu-nl.com/api/v1/locales")
            dispatch({ type: SET_LOCALES, payload: response.data.data })
        } catch (e) {
            if (e.response) {
            }
        }
    };
}

export function setLocale(locale) {
    return {
        type: SET_LOCALE,
        payload: locale
    }
}


export function setIsShowCart(isShowCart) {
    return {
        type: SHOW_CARD,
        payload: isShowCart
    }
}



