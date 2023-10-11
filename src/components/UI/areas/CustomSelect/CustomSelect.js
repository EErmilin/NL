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
    classNameLabel,
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

    const cls = ["CustomSelect"];
    const clsLabel = ["custom-select-label"];
    const clsWrp = ["custom-select-wrap"];

    const clsSelect = ["custom-select"];
    if (required) {
        cls.push(classes.required);
    }
    /** Видимость сообщения об ошибке */
    const errMsg = isInvalid(errorMessage) ? (
        <span className={classes.err_msg}>{errorMessage}</span>
    ) : null;

    if (isInvalid(errorMessage)) {
        cls.push(classes.invalid);
      } else {
        cls.push(classes.valid);
      }
    
      if (className) {
        clsWrp.push(className);
    }

    if (required) {
        cls.push(classes.required);
    }
      if (classNameLabel) {
        clsLabel.push(classNameLabel);
      }

    return(
        <div className={clsWrp.join(" ")}>
            {label && (
                <div>
                <label className={clsLabel.join(" ")}>
                    {label}
                    {required ? '*' : ''}
                </label>
                </div>
            )}
            <Select
                className={cls.join(" ")}
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
