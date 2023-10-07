import React from 'react'
import { useLocation } from "react-router-dom";
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';

function WrapperComponent({ children }) {

    const cls = []
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