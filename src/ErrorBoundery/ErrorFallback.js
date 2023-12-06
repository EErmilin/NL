import React, { useEffect } from "react"
import classes from "./ErrorBoundery.module.scss";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ButtonDefault from "../components/UI/btns/Button/Button";



function ErrorFallback({ error, resetErrorBoundary }) {
    const navigate = useNavigate()
    useEffect(() => {
        window.onclick = function () {
            return resetErrorBoundary()
        }
    })
    console.log('!!!!!!!!!!')
    console.log(error)
    return (
        <>
            <Header />
            <div role="alert">
                <div className={classes.error_fallback}>
                    <div className={classes.error_fallback_wrap}>
                            <p className={classes.error_fallback_title}>404</p>
                            <h2 className={classes.error_fallback_title_big}>Page not found</h2>
                            <p className={classes.error_fallback_subtitle}>The page you are on does not exist</p>
                            <ButtonDefault title={'Back to the main'}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default ErrorFallback