import ModalWithBackground from '../ModalWithBackground/ModalWithBackground';
import React from 'react';
import ButtonDefault from '../../UI/btns/Button/Button';
import { NavLink } from 'react-router-dom';
import classes from "./SupportModal.module.scss"
const SupportModal = ({ closeModal, btnCancelClick }) => {


    return (
        <ModalWithBackground
            closeModal={closeModal}
            btnCancelClick={btnCancelClick}
            width={360}
        >
            <h1 className={classes.title}>Go to the support chat</h1>
            <NavLink className={classes.btn_telegram} to="https://t.me/nlstar_support" target={"_blank"}>Write a telegram</NavLink>
            <a className={classes.btn} href="mailto: abc@example.com">Write to the mail</a>
        </ModalWithBackground>

    );
};

export default SupportModal;

