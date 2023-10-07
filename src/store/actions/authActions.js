
import Cookies from 'js-cookie';
import axios from "axios";
import axiosCustom from '../../axios/axiosCustom';
import { SET_USER_PROFILE } from './actionsType';
const backUrl = "http://148.251.20.4:5555"


export function checkPartnerId(id) {
    return async (dispatch) => {
        try {
            const response = await axiosCustom.post(`${backUrl}/api/v1/customer/validate-referral-code/${id}`)
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
            
            const response = await axiosCustom.post(`${backUrl}/api/v1/customer/pre-register/`, {phone:  phone})

            return response
        } catch (e) {
            if (e.response?.data) {
             return   e.response?.data
            }
        }
    };
}


export function register(params) {
    return async (dispatch) => {
        try {
            
            const response = await axiosCustom.post(`${backUrl}/api/v1/customer/register`, params)

            return response
        } catch (e) {
            if (e.response?.data) {
             return   e.response?.data
            }
        }
    };
}


export function login(values) {
    return async (dispatch) => {
        try {
            const response = await axiosCustom.post(`${backUrl}/api/v1/customer/login`, {phone:values.phone, password: values.password, device_name: values.device_name})

            console.log("authAction")
            console.log(response)
            return response

        } catch (e) {
            if (e.response?.data) {
             return   e.response?.data
            }
        }
    };
}


export function sendCode(code, phone) {
    return async (dispatch) => {
        try {
            const response = await axiosCustom.post(`${backUrl}/api/v1/customer/pre-register/check`, {code: code, phone:phone})
            return response

        } catch (e) {
            if (e.response?.data) {
             return   e.response?.data
            }
        }
    };
}

export function getCountres() {
    return async (dispatch) => {
        try {
            const response = await axiosCustom(`${backUrl}/api/v1/countries`)
            return response

        } catch (e) {
            if (e.response?.data) {
             return   e.response?.data
            }
        }
    };
}


export function getProfile() {
    return async (dispatch) => {
        try {
            const response = await axiosCustom(`${backUrl}/api/v1/customer/get`)
            dispatch(setUserProfile(response.data.data))
            return response

        } catch (e) {
            if (e.response?.data) {
             return   e.response?.data
            }
        }
    };
}

export function setUserProfile(data) {
    return {
        type: SET_USER_PROFILE,
        payload: data
    }
}





