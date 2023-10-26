import React from "react";
import classes from "./CustomRadio.module.scss";

function isInvalid(errorMessage) {
    return errorMessage;
}

export default function CustomRadio({
    className,
    isColumn,
    label,
    name,
    listRadio,
    value,
    onChange,
    changeHandler,
    checked,
    errors,
    errorMessage,
    shouldValidate,
    required,
    touched,
    valid,
    labelClassName,
    disabled,
    children,
    radioLabelClassName,
    radioWrpClassName
}) {
    const cls = [classes.wrapper];
    if (className) cls.push(className);
    const clsLabel = [classes.label];
    if (labelClassName) clsLabel.push(labelClassName);
    const clsRadioLabel = [classes.input_label];
    if (radioLabelClassName) clsRadioLabel.push(radioLabelClassName);
    const clsRadioWrp = [classes.input_radio];
    if (radioWrpClassName) clsRadioWrp.push(radioWrpClassName);
    /**
     * Если поле инвалидно
     * то добавляем классы для инвалидного поля,
     * иначе, если поле было тронуто добавляем классы для валидного
     */
    if (isInvalid(errorMessage)) {
        cls.push(classes.invalid);
    }

    console.log('#########')
    console.log(errorMessage)

    /** Видимость сообщения об ошибке */
    const errMsg = isInvalid(errorMessage) ? (
        <span>{errorMessage}</span>
    ) : null;

    const renderChildren = (checked) => {
        if (checked) {
            return <div className={classes.radio_children}>
                {children}
            </div>
        }
    }

    const radioList = listRadio.map((text, key) => {
        if (children) {
            const isChecked = text.value == value ? true : false
            return <div className={clsRadioWrp.join(" ")} key={key}>
                <label className={classes.label_wrp} key={text.text}>
                    <input style={{ display: "block" }} type="radio" name={name} checked={isChecked} onChange={() => onChange(text.value)} disabled={disabled} />
                    <span className={clsRadioLabel.join(" ")}>{text.text}</span>
                </label>
                {renderChildren(isChecked)}
            </div>
        }
       return <label className={classes.label_wrp} key={text.text}>
            {checked ?
                <input style={{ display: "block" }} type="radio" name={name} checked={text.value == value ? true : false} onChange={() => onChange(text.value)} disabled={disabled} />
                : <input style={{ display: "block" }} type="radio" name={name} onChange={() => onChange(text.value)} disabled={disabled} />
            }
            <span className={classes.input_label}>{text.text}</span>
        </label>

    })

    return (
        <div className={cls.join(" ")}>
            {label && <span className={clsLabel.join(" ")}>{label}</span>}
            <div className={classes.radio_wrp} style={{ display: isColumn && "block" }}>{radioList}</div>
            {errMsg}
        </div>
    )
}