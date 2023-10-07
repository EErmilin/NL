import ModalWithBackground from '../ModalWithBackground/ModalWithBackground';
import classes from './AuthModal.module.scss';
import React from 'react';
import ButtonDefault from '../../UI/btns/Button/Button';
import { useFormik } from 'formik';
import { useMemo } from 'react';
import { useState } from 'react';
import Input from '../../UI/areas/Input/Input';
import { useDispatch } from 'react-redux';
import { login } from '../../../store/actions/authActions';
import { useEffect } from 'react';
import { setIsAuth } from '../../../store/actions/routerActions';
import { useNavigate } from 'react-router-dom';

const AuthModal = ({ closeModal, btnCancelClick }) => {
    const dispatcher = useDispatch()
    const navigate = useNavigate()

    const [errors, setErrors] = useState({
        phone: "",
        code: "",
    })


    /** Начальные значения */
    const initialValues = useMemo(() => {
        return {
            phone: "",
            password: "",
            device_name: "web"
        }
    }, [])


    useEffect(() => {
        return () => {
            dispatcher(setIsAuth())
        };
    }, [])

    const {
        values,
        handleChange,
        handleSubmit,
        touched,
    } = useFormik({
        initialValues,
        onSubmit: (values) => {

        },
        enableReinitialize: true
    });

    /** Очищаем ошибки и изменяем состояние */
    const clearErrorAndChange = (field, value) => {
        const errorObj = errors
        errorObj[field] = ""
        setErrors(errorObj)
        handleChange({ target: { name: field, value: value } })
    }

    const submit = async () => {

        const response = await dispatcher(login(values))
        if (response.data?.success) {
            navigate("/personal-area")
        }
    }





    return (
        <ModalWithBackground
            closeModal={closeModal}
            btnCancelClick={btnCancelClick}
            width={360}
        >
            <div className={classes.modal}>
                <div className={classes.modal_title}>Log in</div>
                <Input
                    value={values.id}
                    name="phone"
                    id="phone"
                    placeholder={"ID, phone number"}
                    errorMessage={errors.phone}
                    onChange={(e) => {
                        return clearErrorAndChange("phone", e.target.value)
                    }} />
                <Input
                    value={values.id}
                    name="password"
                    id="password"
                    placeholder={"Password"}
                    errorMessage={errors.password}
                    onChange={(e) => {
                        return clearErrorAndChange("password", e.target.value)
                    }} />

                <div className={classes.modal_forgot}>Forgot your password?</div>

                <ButtonDefault title={"Login"} onClick={submit} className={classes.modal_btn} />
                <div className={classes.modal_sing}>Don't have an account? <span className={classes.modal_sing_link}>Sign up</span></div>

            </div>



        </ModalWithBackground>

    );
};

export default AuthModal;

