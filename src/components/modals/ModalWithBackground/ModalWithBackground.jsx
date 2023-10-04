import React, { useEffect, useRef, useState } from 'react';
import DarkBackground from '../DarkBackground/DarkBackground';
import classes from './ModalWithBackground.module.scss';


const ModalWithBackground = ({
    children,
    className,
    closeModal,
    btnCancelClick,
    width,
    height,
}) => {
    const cls = [classes.Modal]
    if (className) cls.push(className)

    const closeBtn = <button className={classes.closeBtn} onClick={(event) => btnCancelClick(event)}></button>

    return (
        <DarkBackground
            closeModal={closeModal}
            >
            <div
                className={cls.join(' ')}
                style={{
                    maxWidth: width || '',
                    maxHeight: height || '',
                }}
                data-wrap="modal"
            >
                <div>
                    {children}
                    {closeBtn}
                </div>
            </div>
        </DarkBackground>
    );
};

export default ModalWithBackground;

