import { GET_CATEGORIES, GET_PRODUCTS, GET_PRODUCT } from "../actions/actionsType"
import axiosCustom from "../../axios/axiosCustom";

const backUrl = "https://testapi.eu-nl.com"


export function getCategories() {
    return async (dispatch) => {

        try {
            const response = await axiosCustom(`${backUrl}/api/v1/descendant-categories`)
            const { data } = response.data
            dispatch({ type: GET_CATEGORIES, payload: data })
        } catch (e) {
            if (e.response) {
            }
        }
    };
}


export function getProducts(id) {
    return async (dispatch) => {

        try {
            const response = await axiosCustom(`${backUrl}/api/v1/products?sort=id&id=${id}`, {id:id})
            const { data } = response.data
            dispatch({ type: GET_PRODUCTS, payload: data })
        } catch (e) {
            if (e.response) {
            }
        }
    };
}


export function getProduct(id) {
    return async (dispatch) => {

        try {
            const response = await axiosCustom(`${backUrl}/api/v1/products/${id}`)
            const { data } = response.data
            dispatch({ type: GET_PRODUCT, payload: data })
        } catch (e) {
            if (e.response) {
            }
        }
    };
}
export function getCurrentCategorie(id) {
    return async (dispatch) => {

        try {
            const response = await axiosCustom(`${backUrl}/api/v1/descendant-categories?parent_id=${id}`)
            const { data } = response.data
            return data
        } catch (e) {
            if (e.response) {
            }
        }
    };
}

