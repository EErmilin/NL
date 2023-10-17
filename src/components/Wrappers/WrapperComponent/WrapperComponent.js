import React from 'react'
import { useLocation } from "react-router-dom";
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import classes from "./WrapperComponent.module.scss";

function WrapperComponent({ children, bodyType }) {

    const cls = [classes.wrapper]
    if(bodyType===2){
        cls.push(classes.gray)
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