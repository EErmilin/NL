import ModalWithBackground from '../ModalWithBackground/ModalWithBackground';
import classes from './LocalesModal.module.scss';
import React from 'react';
import ButtonDefault from '../../UI/btns/Button/Button';
import { useFormik } from 'formik';
import { useMemo } from 'react';
import { useState } from 'react';
import Input from '../../UI/areas/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../store/actions/authActions';
import { useEffect } from 'react';
import { setIsAuth, setLocale } from '../../../store/actions/routerActions';
import { useNavigate } from 'react-router-dom';
import CustomSelect from '../../UI/areas/CustomSelect/CustomSelect';
import { useTranslation } from 'react-i18next';

const LocalesModal = ({ closeModal, btnCancelClick }) => {

    const locales = useSelector(state => state.router.locales);
    const locale = useSelector(state => state.router.locale);
    const dispatcher = useDispatch()
    const { t, i18n } = useTranslation()

    const [errors, setErrors] = useState({
        order: "",
        language: "",
    })

    const localesOptions = locales?.map((locale) => { return {...locale, label: locale.name, value: locale.id } })


    /** Начальные значения */
    const initialValues = useMemo(() => {
        return {
            order: "",
            language: {...locale, label: locale.name, value: locale.id } ?? locale.find(locale=>{
                if(locale.id===1){
                    return {...locale, label: locale.name, value: locale.id }
                }
            }),
        }
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

        console.log(values.language.code)
        i18n.changeLanguage(values.language.code);
        localStorage.setItem('locale', values.language.id)
        localStorage.setItem('localeCode', values.language.code)
        dispatcher(setLocale(values.language))
   
        btnCancelClick()
    }


    return (
        <ModalWithBackground
            closeModal={closeModal}
            btnCancelClick={btnCancelClick}
            width={360}
        >
            <div className={classes.modal}>
                <CustomSelect
                    classNameLabel={classes.modal_label}
                    classNameSelect={classes.modal_select}
                    value={values.id}
                    label={"Order to"}
                    name="order"
                    id="order"
                    placeholder={"United Kingdom"}
                    errorMessage={errors.phone}
                    onChange={(e) => {
                        return clearErrorAndChange("order", e.target.value)
                    }} />
                <CustomSelect
                    classNameLabel={classes.modal_label}
                    label={"Language"}
                    options={localesOptions}
                    value={values.language}
                    name="language"
                    id="language"
                    placeholder={"English"}
                    errorMessage={errors.password}
                    onChange={(e) => {
                        return clearErrorAndChange("language", e)
                    }} />
                <ButtonDefault title={"Choose"} onClick={submit} className={classes.modal_btn} />
            </div>



        </ModalWithBackground>

    );
};

export default LocalesModal;

