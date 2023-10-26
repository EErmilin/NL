import axios from 'axios';
import { clearUserData } from '../store/actions/authActions';
import store from "../store/store"

const axiosCustom = axios.create({
    baseURL: "https://testapi.eu-nl.com",
})
/**
 * Заголовок разрешающий устанавливать куки от сервера
 */
axios.defaults.withCredentials = true;
//axiosCustom.defaults.withCredentials = true;
axiosCustom.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

axiosCustom.defaults.headers.common['Accept-Language'] = localStorage.getItem("localeCode");

axiosCustom.interceptors.request.use((config) => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = token && token !== 'undefined' ? `Bearer ${token}` : null;
    return config;
});


// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


/**
 * Перехват запросов для проверки валидности access токена
 * если токен устарел, то рефрешим его
 */
axiosCustom.interceptors.request.use((config) => {
    return config;
});
/**
 * Перехват ответов для проверки авторизации
 * если токен устарел, то рефрешим его
 */
axiosCustom.interceptors.response.use((response) => {

    if (response.data.token) {
        localStorage.setItem('token', response.data.token)
    }
    return response
},

    async (error) => {
        console.log(error)
        if (error.response.status === 401) {
            store.dispatch(clearUserData())
        }
        return Promise.reject(error);
    });
export default axiosCustom;