/* eslint-disable global-require */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import axiosCustom from '../axios/axiosCustom';

i18n.use(initReactI18next).init(
    {
        resources: {
            ...require('./locales/fr.json'),
            ...require('./locales/en.json'),
        },
        whiteList:["fr", "en"],
        lng: localStorage.getItem("localeCode"), 
        fallbackLng: localStorage.getItem("localeCode"), 

        
    

        interpolation: {
            escapeValue: false,
        },
    },
    () => {
        axiosCustom.defaults.headers.common['Accept-Language'] = i18n.language;
    }
);

export default i18n