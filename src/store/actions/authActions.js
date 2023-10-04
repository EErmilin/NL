
import Cookies from 'js-cookie';
import axios from "axios";
import axiosCustom from '../../axios/axiosCustom';
const backUrl = "http://148.251.20.4:5555"


export function checkPartnerId(id) {
    return async (dispatch) => {
        try {
            const response = await axiosCustom.post(`${backUrl}/api/v1/customer/validate-referral-code/${id}`, { withCredentials: true }).then((resp) => {
                return resp
            });
            return response

        } catch (e) {
            if (e.response?.data) {
             return   e.response?.data
            }
        }
    };
}


export function getSmsCode(phone) {
    return async (dispatch) => {
        try {
            
            const response = await axiosCustom.post(`${backUrl}/api/v1/customer/pre-register/`, {phone: "7" + phone}).then((resp) => {
                return resp
            });

            return response
        } catch (e) {
            if (e.response?.data) {
             return   e.response?.data
            }
        }
    };
}




export function sendCode(code) {
    return async (dispatch) => {
        try {
            const response = await axiosCustom.post(`${backUrl}/api/v1/customer/pre-register/check`, {code: code}).then((resp) => {
                return resp
            });
            return response

        } catch (e) {
            if (e.response?.data) {
             return   e.response?.data
            }
        }
    };
}


