import classes from "./CustomTextArea.module.scss";
import React, { useState } from 'react';
import ReactInputMask from "react-input-mask";

function isInvalid(errorMessage) {
  return errorMessage
}


export const CustomTextArea = ({
  placeholder,
  name,
  mask,
  type,
  value,
  className,
  multiple,
  classNameWrp,
  onChange,
  label,
  labelInput,
  errorMessage,
  touched,
  disabled = false,
  required, }) => {

  /** Формируем css классы */
  const cls = [classes.input_wrp];
  if (className) {
    cls.push(className);
  }

  /** Состояние для показа пороля */
  const [passwordShow, setPasswordShow] = useState(true)
  /** Устанавливаем тип поля */
  const inputType = type || 'text';


  /** Создаем уникальный id */
  const id = `${inputType}-${Math.random()}`;

  /**
* Если поле инвалидно
* то добавляем классы для инвалидного поля,
* иначе, если поле было тронуто добавляем классы для валидного
*/

  if (isInvalid(errorMessage)) {
    cls.push(classes.invalid);
  } else {
    cls.push(classes.valid);
  }




  const errMsg = isInvalid(errorMessage) ? (
    <span className={classes.error}>{errorMessage}</span>
  ) : null;



  return (
    <>
      <div className={cls.join(' ')}>
        {label && <div className={classes.label}> {label}</div>}
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
        ></textarea>
      </div>
      {errMsg}
    </>
  )
}

export default CustomTextArea
