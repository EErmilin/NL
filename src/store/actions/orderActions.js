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

export function updateCard(id,count) {
    return async (dispatch) => {

        try {
            const response = await axiosCustom.put(`${backUrl}/api/v1/customer/cart/update`, {qty:{[id]:count}})
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
            "product_id": 1,
            "quantity": 1,
            "selected_configurable_option": 4,
            "super_attribute": {
                "23": 4,
                "24": 9
            },
            "qty": {
                "1": 2,
                "2": 3
            },
            "links": [
                2,
                3
            ],
            "bundle_options": {
                "1": [
                    1
                ],
                "2": [
                    3
                ],
                "3": [
                    5
                ],
                "4": [
                    7
                ]
            },
            "bundle_option_qty": {
                "1": 1,
                "2": 3
            },
            "booking": {
                "date": "2023-05-14",
                "slot": "1684067400-1684078200",
                "qty": {
                    "1": 2,
                    "2": 5
                },
                "renting_type": "daily",
                "date_from": "2023-05-13",
                "date_to": "2023-05-15",
                "note": "This is a welcome note."
            }
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

