
import axios from "axios";
import axiosCustom from "../../axios/axiosCustom";
import { SET_IS_AUTH } from "./actionsType";


export function setIsAuth() {
    return {
        type: SET_IS_AUTH,
    }
}

export function getChannel() {
    return async (dispatch) => {

        try {
           await axiosCustom("https://testapi.eu-nl.com/api/v1/channels?sort=id").then((resp) => {
                console.log(resp)
              });

        } catch (e) {
            if (e.response) {
            }
        }
    };
}
