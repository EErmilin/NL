import axios from 'axios';




const axiosCustomTranslations = axios.create({
    baseURL: "https://testapi.eu-nl.com",
})


axiosCustomTranslations.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIzMWE0MzUzNS0wZTM4LTRmMmItYjMxYy0xZWQ5YzIzOWNmMWYiLCJ0eXBlIjoiY2xpZW50IiwiaWF0IjoxNjk2OTQ0MjI5LCJleHAiOjE2OTcwMzA2Mjl9.3dZuiSGhD3vb5m-FWvO3knUiXSAnj6ihJqJcNnA9xkI`;
    return config;
});


// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


/**
 * Перехват запросов для проверки валидности access токена
 * если токен устарел, то рефрешим его
 */
 axiosCustomTranslations.interceptors.request.use((config) => {
    return config;
});
/**
 * Перехват ответов для проверки авторизации
 * если токен устарел, то рефрешим его
 */
 axiosCustomTranslations.interceptors.response.use((response) => {
    if (response.data.token) {
        localStorage.setItem('token', response.data.token)
    }
    return response
},

    async (error) => {

        return Promise.reject(error);
    });
export default axiosCustomTranslations;