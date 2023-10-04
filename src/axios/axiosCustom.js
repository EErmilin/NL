import axios from 'axios';




const axiosCustom = axios.create({
    baseURL: "http://148.251.20.4:5555",
    withCredentials: true,
})
/**
 * Заголовок разрешающий устанавливать куки от сервера
 */
axios.defaults.withCredentials = true;
//axiosCustom.defaults.withCredentials = true;
axiosCustom.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


// console.log('@@@@@@@@@@@@@@')
// console.log(axiosCustom.defaults.headers)


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
//axiosCustom.interceptors.response.use(  (response) => { 
//    console.log("")
//    console.log(response)
//    return response},
//
//    async (error) => {
//
//    return Promise.reject(error);
//});
export default axiosCustom;

