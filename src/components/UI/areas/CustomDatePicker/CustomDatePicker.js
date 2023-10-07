import { useRef, useState } from "react"
import classes from "./CustomDatePicker.module.scss"
import "./CustomDatePicker.scss"
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ru, enGB } from 'date-fns/esm/locale';
import React from 'react';

registerLocale('ru-RU', ru);


function isInvalid(errorMessage) {
    return errorMessage
}

const CustomDatePicker = ({
    className,
    id,
    value,
    onChange,
    errorMessage
}) => {

    const [isPlaceHolder, setIsPlaceHolder] = useState(true)
    /** Формируем cтили обертки */
    const cls = [classes.CustomDatePicker];
    if (className) {
        cls.push(className);
    }


    if (isInvalid(errorMessage)) {
        cls.push(classes.invalid);
    } else {
        cls.push(classes.valid);
    }


    const pickerRef = useRef(null)

    const setDate = (e) => {
        setIsPlaceHolder(false)
        onChange(e)
    }


    const calendar = <DatePicker
        placeholderText={"Date of Birth*"}
        // locale={"ru-RU"}
        dateFormat={['dd.MM.yyyy', 'dd/MM/yyyy', 'ddMMyyyy', 'dd MM yyyy']}
        id={id}
        selected={!isPlaceHolder ? new Date(value) : null}
        ref={pickerRef}
        onChange={(e) => setDate(e)}
    />


    return (
        <>
            <div className={cls.join(' ')}>
                {calendar}
            </div>
           <span className={classes.error}>{errorMessage}</span> 
        </>
    );
};



export default CustomDatePicker