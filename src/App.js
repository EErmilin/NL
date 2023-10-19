import React, { useEffect } from 'react'
import { Routes, useLocation, useSearchParams } from "react-router-dom"
import { routes } from "./routes/routes";
import { getListRoute } from "./routes/getListRoute";
import { useDispatch, useSelector } from 'react-redux';
import { getChannel, getLocales, setLocale } from './store/actions/routerActions';
import AuthModal from './components/modals/AuthModal/AuthModal';
import useToggleVisibility from './hooks/useToggleVisibility';


/** Конфиг для интернационализации */
import './i18n/i18n-config';
import { getProfile } from './store/actions/authActions';
import queryClient from "./queryClient";
import { QueryClientProvider } from '@tanstack/react-query';
import { getCategories } from './store/actions/catalogActions';


export const localesFake = [
    {
        code: "fr",
        created_at: null,
        id: 2,
        name: "French",
        updated_at: null
    },
    {
        code: "en",
        created_at: null,
        id: 1,
        name: "English",
        updated_at: null
    },
]

function App() {

    const isAuth = useSelector(state => state.router.isAuth)
    const [isAuthModal, setIsAuthModal, closeIsAuthModal] = useToggleVisibility(false)
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
        if (localStorage.getItem('token') && localStorage.getItem('token') !== 'undefined') {
            dispatcher(getProfile())
        }
        dispatcher(getCategories())
        dispatcher(getLocales())
        //dispatcher(getChannel())
    }, [])

    useEffect(() => {
        if (localStorage.getItem('locale')) {
            dispatcher(setLocale(localesFake.find((locale => locale.id == localStorage.getItem('locale')))))
        } else if (localesFake.length) {
            dispatcher(setLocale(localesFake.find((locale) => locale.id === 1)))
        }
    }, [])

    const listRoutes = getListRoute(routes)

    return (
        <QueryClientProvider client={queryClient}>
            <React.Suspense fallback="loading...">
                <div className="App">
                    <Routes>
                        {listRoutes}
                    </Routes>
                    {templateAuthModal}
                </div>
            </React.Suspense>
        </QueryClientProvider>
    );
}

export default App;
