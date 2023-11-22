import ModalWithBackground from '../ModalWithBackground/ModalWithBackground';
import classes from './BecomePartnerModal.module.scss';
import React from 'react';
import ButtonDefault from '../../UI/btns/Button/Button';
import { useFormik } from 'formik';
import { useMemo } from 'react';
import CustomRadio from '../../UI/areas/CustomRadio/CustomRadio';
import { useState } from 'react';
import { becomePartner, getProfile } from '../../../store/actions/authActions';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../../UI/areas/Input/Input';
import { useEffect } from 'react';

const BecomePartnerModal = ({ closeModal, btnCancelClick }) => {

    const [successModal, setSuccesModal] = useState(false)
    const [isInputCode, setIsInoutCode] = useState(false)
    const dispatcher = useDispatch()
    const user = useSelector(state => state.auth.user);


    const [errors, setErrors] = useState({
        referral_code: ''
    })
    /** Начальные значения */
    const initialValues = useMemo(() => {
        return {
            radio: 0,
            referral_code: user?.parent_customer?.referral_code,
        }
    }, [user])

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

    useEffect(() => {
        if (isInputCode) {
            setErrors({ errors, referral_code: "" })
            return handleChange({ target: { name: "referral_code", value: "" } })
        }
        handleChange({ target: { name: "referral_code", value: user?.parent_customer?.referral_code, } })
    }, [isInputCode])

    useEffect(() => {
        if (successModal) {
            dispatcher(getProfile())
        }
    }, [successModal])

    /** Очищаем ошибки и изменяем состояние */
    const clearErrorAndChange = (field, value) => {
        const errorObj = errors
        errorObj[field] = ""
        setErrors(errorObj)
        handleChange({ target: { name: field, value: value } })
    }

    const submit = async () => {
        let response;
        try {
            if (values.radio === 1) {
                if (isInputCode) {
                    response = await dispatcher(becomePartner(values.referral_code))
                    console.log('response',response)
                    if (!response.success) {
                        response.data && setErrors(response.data)
                        return
                    } else {
                        return setSuccesModal(true)
                    }
                }
                return setIsInoutCode(true)
            }
            response = await dispatcher(becomePartner(values.referral_code))
            console.log('response',response.success)
            if (!response.success) {
                response.data && setErrors(response.data)
                return 
            } else {
                return setSuccesModal(true)
            }
        } catch (error) {
            console.log(error)
        }

    }

    const renderModal = () => {
        if (successModal) {
            return <div className={classes.success}>
                Now you are a partner NL store
            </div>
        }
        if (isInputCode) {
            return <div className={classes.modal}>
                <h2 className={classes.modal_title}>Become a partner</h2>
                <Input
                    className={classes.input}
                    value={values.referral_code}
                    name="referral_code"
                    id="referral_code"
                    placeholder={"ID"}
                    errorMessage={errors.referral_code.length && errors.referral_code[0]}
                    onChange={(e) => {
                        return clearErrorAndChange("referral_code", e.target.value)
                    }} />
                <ButtonDefault title={"Confirm"} onClick={submit} className={classes.modal_btn} />
            </div>
        }
        return <div className={classes.modal}>
            <h2 className={classes.modal_title}>Become a partner</h2>
            <div className={classes.radio_wrp}>
                <CustomRadio
                    value={values.radio}
                    checked={true}
                    className={classes.radio}
                    onChange={(e) => {
                        return clearErrorAndChange("radio", e)
                    }}
                    listRadio={[{
                        text: "Become a partner for the current mentor",
                        value: 0
                    }, {
                        text: "Become a partner for another mentor",
                        value: 1
                    }]} />
            </div>
            <ButtonDefault title={"Continue"} onClick={submit} className={classes.modal_btn} />
        </div>

    }

    return (
        <ModalWithBackground
            closeModal={closeModal}
            btnCancelClick={btnCancelClick}
            width={360}
        >
            {renderModal()}
        </ModalWithBackground>

    );
};

export default BecomePartnerModal;

