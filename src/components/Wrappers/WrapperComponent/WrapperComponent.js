import React from 'react'
import { useLocation } from "react-router-dom";
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';

function WrapperComponent({ children }) {

    const url = useLocation()

    const cls = []
    if (url.pathname === "/horoscope") {
        cls.push("horoscope")
    }
    return (
        <>
            <Header />
            <div className={cls.join(" ")}>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default WrapperComponent;