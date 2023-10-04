import React from "react";
import classes from "./DarkBackground.module.scss";


function DarkBackground ({ children, className, closeModal}){
    /** Формируем классы стилей */
    const cls = [classes.DarkBackground];
    if (className) {
        cls.push(className);
    }


    return (
        <div
            onMouseDown={closeModal}
            onKeyPress={closeModal}
            className={cls.join(' ')}
            role="button"
        >
            {children}
        </div>
    )
}

export default DarkBackground