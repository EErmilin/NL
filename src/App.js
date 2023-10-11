import React, { useEffect } from 'react'
import { Routes, useLocation, useSearchParams } from "react-router-dom"
import { routes } from "./routes/routes";
import { getListRoute } from "./routes/getListRoute";
import { useDispatch, useSelector } from 'react-redux';
import { getChannel, getLocales, getTranslation, setLocale } from './store/actions/routerActions';
import AuthModal from './components/modals/AuthModal/AuthModal';
import useToggleVisibility from './hooks/useToggleVisibility';

/** Конфиг для интернационализации */
import './i18n/i18n-config';

function App() {

    const isAuth = useSelector(state => state.router.isAuth)
    const [isAuthModal, setIsAuthModal, closeIsAuthModal] = useToggleVisibility(false)
    const locales = useSelector(state => state.router.locales);
    const url = useLocation()
    const dispatcher = useDispatch()

    useEffect(() => {
        if (isAuth && (!localStorage.getItem('token') || localStorage.getItem('token') === 'undefined')) {
            setIsAuthModal(true)
        } else {
            setIsAuthModal(false)
        }

    }, [isAuth, localStorage.getItem('token')])


    const templateAuthModal = isAuthModal && (
        <AuthModal
            closeModal={closeIsAuthModal}
            btnCancelClick={() => setIsAuthModal(false)} />
    )

    useEffect(() => {
        document.body.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }, [url.pathname])

    useEffect(() => {
        dispatcher(getLocales())
        dispatcher(getChannel())
    }, [])

    useEffect(() => {
        if(localStorage.getItem('locale')){
            dispatcher(setLocale(locales.find((locale=> locale.id == localStorage.getItem('locale')))))
        }else if (locales.length) {
            dispatcher(setLocale(locales.find((locale) => locale.id === 1)))
        }
        dispatcher(getTranslation())
    }, [locales])



    const listRoutes = getListRoute(routes)

    return (
        <React.Suspense fallback="loading...">
        <div className="App">
            <Routes>
                {listRoutes}
            </Routes>
            {templateAuthModal}
        </div>
        </React.Suspense>
    );
}

export default App;
