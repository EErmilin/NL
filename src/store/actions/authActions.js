import axiosCustom from '../../axios/axiosCustom';
import { SET_USER_PROFILE, SET_REGISTER_DATA, CLEAR_USER_DATA } from './actionsType';
const backUrl = "https://testapi.eu-nl.com"


export function checkPartnerId(id, isPartner = false) {
    const url = isPartner ? `${backUrl}/api/v1/customer/validate-partner-code/${id}` : `${backUrl}/api/v1/customer/validate-referral-code/${id}`
    return async (dispatch) => {
        try {
            const response = await axiosCustom.post(url)
            return response

        } catch (e) {
            if (e.response?.data) {
                return e.response?.data
            }
        }
    };
}


export function getSmsCode(phone) {
    return async (dispatch) => {
        try {

            const response = await axiosCustom.post(`${backUrl}/api/v1/customer/pre-register/`, { phone: phone.replace("+", "") })

            return response
        } catch (e) {
            if (e.response?.data) {
                return e.response?.data
            }
        }
    };
}


export function register(params) {
    return async (dispatch) => {
        try {

            const response = await axiosCustom.post(`${backUrl}/api/v1/customer/register`, { ...params, phone: params.phone.replace("+", "") })

            return response
        } catch (e) {
            if (e.response?.data) {
                return e.response?.data
            }
        }
    };
}


export function login(values) {
    return async (dispatch) => {
        try {
            const response = await axiosCustom.post(`${backUrl}/api/v1/customer/login`, { phone: values.phone.replace("+", ""), password: values.password, device_name: values.device_name })

            return response

        } catch (e) {
            if (e.response?.data) {
                return e.response?.data
            }
        }
    };
}


export function sendCode(code, phone) {
    return async (dispatch) => {
        try {
            const response = await axiosCustom.post(`${backUrl}/api/v1/customer/pre-register/check`, { code: code, phone: phone.replace("+", "") })
            return response

        } catch (e) {
            if (e.response?.data) {
                return e.response?.data
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
                return e.response?.data
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
                return e.response?.data
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

export function setRegisterData(data) {
    return {
        type: SET_REGISTER_DATA,
        payload: data
    }
}

export function clearUserData() {
    localStorage.setItem('token', 'undefined')
    return {
        type: CLEAR_USER_DATA,
    }
}


export function becomePartner(partnerCode) {
    return async (dispatch) => {
        try {
            const response = await axiosCustom.post(`${backUrl}/api/v1/customer/become-partner`, { referral_code: partnerCode })
            console.log('!!!!!!!!!!responseaction')
            console.log(response)
            return response.data

        } catch (e) {
            if (e.response?.data) {
                return e.response?.data
            }
        }
    };
}










