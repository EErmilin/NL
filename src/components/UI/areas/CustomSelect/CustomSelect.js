import React from 'react';
import './CustomSelect.scss';
import Select from 'react-select';
import classes from '../Input/Input.module.scss';

const customStyles = {
    control: (provided, state) => ({
        ...provided,
        border: "1px solid #FF7F7F !important;",
    }),
}


function isInvalid(errorMessage) {
    return errorMessage
}

const CustomSelect = ({
    label,
    className,
    required,
    valid,
    touched,
    shouldValidate,
    errorMessage,
    noMessage,
    typeArrow,
    placeholder,
    disabled,
    isSearchable=false ,
    ...rest }) => {
    const cls = [classes.Input];
    if (required) {
        cls.push(classes.required);
    }
    /** Видимость сообщения об ошибке */
    const errMsg = isInvalid(errorMessage) ? (
        <span className={classes.err_msg}>{errorMessage}</span>
    ) : null;

    return(
        <div className={`custom-select-wrap ${className} `}>
            {label && (
                <label className="custom-select-label">
                    {label}
                    {required ? '*' : ''}
                </label>
            )}
            <Select
                className="CustomSelect"
                classNamePrefix={"custom-select"}
                isSearchable={ isSearchable }
                placeholder={placeholder}
                isDisabled={disabled}
                {...rest}
            />
            {errMsg}
        </div>
    );
}

export default CustomSelect;
