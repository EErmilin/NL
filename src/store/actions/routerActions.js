
import axios from "axios";
import axiosCustom from "../../axios/axiosCustom";
import axiosCustomTranslations from "../../axios/axiosCustomTranslations";
import { SET_IS_AUTH, SET_LOCALES,SET_LOCALE } from "./actionsType";


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


export function getTranslation() {
    return async (dispatch) => {

        try {

           // const response = await fetch("http://148.251.20.4:8080/api/v1/projects", {
           //     method: 'GET', 
           //     mode: 'no-cors',
           //     headers: new Headers({
           //         'Authorization': Bearer 525e6eb0-3731-41a9-8f96-b9b0dfb35c6e, 
           //         'Content-Type': 'application/x-www-form-urlencoded'
           //     }), 
           //   })
            //const response = await axios({
            //    mode: 'no-cors',
            //    method: "get",
            //    withCredentials: false,
            //    url: "http://148.251.20.4/api/v1/projects",
            //    headers: { "Content-x-api-key": "Bearer 525e6eb0-3731-41a9-8f96-b9b0dfb35c6e" },
    //
            //  })
            //    .then(function (response) {
            //      //handle success
            //      console.log(response);
            //    })
            //    .catch(function (response) {
            //      //handle error
            //      console.log(response);
            //    });
            const response = await axiosCustomTranslations.get("http://148.251.20.4/api/v1/projects")
            console.log('###########')
            console.log(response)
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

