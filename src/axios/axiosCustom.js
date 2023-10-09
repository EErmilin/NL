import axios from 'axios';




const axiosCustom = axios.create({
    baseURL: "https://testapi.eu-nl.com",
})
/**
 * Заголовок разрешающий устанавливать куки от сервера
 */
axios.defaults.withCredentials = true;
//axiosCustom.defaults.withCredentials = true;
axiosCustom.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


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

        return Promise.reject(error);
    });
export default axiosCustom;