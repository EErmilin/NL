import axiosCustom from "../../axios/axiosCustom";
import { SET_CART, SHOW_CARD } from "../actions/actionsType"
const backUrl = "https://testapi.eu-nl.com"

export function getCart() {
    return async (dispatch) => {

        try {
            const response = await axiosCustom(`${backUrl}/api/v1/customer/cart`)
            dispatch({ type: SET_CART, payload: response.data.data })

        } catch (e) {
            if (e.response) {
            }
        }
    };
}

export function deleteCartItem(id) {
    return async (dispatch) => {

        try {
            const response = await axiosCustom.delete(`${backUrl}/api/v1/customer/cart/remove/${id}`)
            dispatch(getCart())

        } catch (e) {
            if (e.response) {
            }
        }
    };
}

export function clearCart() {
    return async (dispatch) => {

        try {
            const response = await axiosCustom.delete(`${backUrl}/api/v1/customer/cart/empty`)
            dispatch({ type: SET_CART, payload: response.data.data })

        } catch (e) {
            if (e.response) {
            }
        }
    };
}

export function updateCard(id, count) {
    return async (dispatch) => {

        try {
            const response = await axiosCustom.put(`${backUrl}/api/v1/customer/cart/update`, { qty: { [id]: count } })
            dispatch({ type: SET_CART, payload: response.data.data })

        } catch (e) {
            if (e.response) {
            }
        }
    };
}


export function addProduct(id) {
    return async (dispatch) => {

        const obj = {
            "is_buy_now": 0,
            "product_id": id,
            "quantity": 1,
        }

        try {
            await axiosCustom.post(`${backUrl}/api/v1/customer/cart/add/${id}`, obj)
            dispatch(getCart())
        } catch (e) {
            if (e.response) {
            }
        }
    };
}

export function addStarterPack(params) {
    console.log("json", JSON.stringify(params))
    return async (dispatch) => {
        try {
            const response = await axiosCustom.post(`${backUrl}/api/v1/customer/cart/add/${params.product_id}`, params)
            dispatch(getCart())
            return response
        } catch (e) {
            if (e.response) {
                console.log('34589347539')
                console.log(e.response.data.message)
                throw new Error(e.response.data.message)
            }
        }
    };
}



export function saveAdress() {
    return async (dispatch) => {

        const obj = {
            "billing": {
                "address1": [
                    "70 Winchester Rd"
                ],
                "save_as_address": false,
                "use_for_shipping": false,
                "first_name": "John",
                "last_name": "Doe",
                "email": "john@example.com",
                "company_name": "Bagisto",
                "city": "Marrero",
                "state": "LA",
                "country": "US",
                "postcode": 70072,
                "phone": 9871234560
            },
            "shipping": {
                "address_id": null,
                "address1": [
                    "819  Farnum Road"
                ],
                "save_as_address": false,
                "first_name": "John",
                "last_name": "Doe",
                "email": "john@example.com",
                "company_name": "Bagisto",
                "city": "Mansfield",
                "state": "OH",
                "country": "US",
                "postcode": 44907,
                "phone": 987654321
            }
        }

        try {
            let response = await axiosCustom.post(`${backUrl}/api/v1/customer/checkout/save-address`, obj)
            await dispatch(saveShipping())
            await dispatch(savePayment())
            response = await dispatch(saveOrder())
            return response.data
        } catch (e) {
            if (e.response) {
            }
        }
    };
}

export function saveShipping() {
    return async (dispatch) => {

        try {
            const response = await axiosCustom.post(`${backUrl}/api/v1/customer/checkout/save-shipping`, { shipping_method: 'flatrate_flatrate' })

        } catch (e) {
            if (e.response) {
            }
        }
    };
}

export function savePayment() {
    return async (dispatch) => {

        const data = {
            "payment": {
                "method": "stripe"
            }
        }

        try {
            const response = await axiosCustom.post(`${backUrl}/api/v1/customer/checkout/save-payment`, data)

        } catch (e) {
            if (e.response) {
            }
        }
    };
}

export function saveOrder() {
    return async (dispatch) => {

        const data = {
            "payment": {
                "method": "stripe"
            }
        }

        try {
            const response = await axiosCustom.post(`${backUrl}/api/v1/customer/checkout/save-order`)
            return response

        } catch (e) {
            if (e.response) {
            }
        }
    };
}



