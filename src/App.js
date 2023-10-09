import React, { useEffect } from 'react'
import { Routes, useLocation, useSearchParams } from "react-router-dom"
import { routes } from "./routes/routes";
import { getListRoute } from "./routes/getListRoute";
import { useDispatch, useSelector } from 'react-redux';
import { getChannel } from './store/actions/routerActions';
import AuthModal from './components/modals/AuthModal/AuthModal';
import useToggleVisibility from './hooks/useToggleVisibility';

function App() {

    const isAuth = useSelector(state => state.router.isAuth)
    const [isAuthModal, setIsAuthModal, closeIsAuthModal] = useToggleVisibility(false)


    const url = useLocation()
    const dispatcher = useDispatch()
    
    useEffect(() => {
        if(isAuth &&( !localStorage.getItem('token') || localStorage.getItem('token')==='undefined')){
            setIsAuthModal(true)
        } else{
            setIsAuthModal(false)
        }
    
    }, [isAuth, localStorage.getItem('token')])


    console.log('@@@@@@@@@@@@')
    console.log(localStorage.getItem('token'))
    console.log(isAuth)

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
        dispatcher(getChannel())
    }, [])


    const listRoutes = getListRoute(routes)

    return (
        <div className="App">
            <Routes>
                {listRoutes}
            </Routes>
            {templateAuthModal}
        </div>
    );
}

export default App;
