import classes from "./Input.module.scss";
import React, { useState } from 'react';
import ReactInputMask from "react-input-mask";


export const Input = ({
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


  const eyeButton = inputType === "password" && <span className={classes.password} onClick={() => setPasswordShow(!passwordShow)}></span>
  const typePassword = inputType === "password" ? (passwordShow ? 'password' : "text") : inputType

  const input = <ReactInputMask
    className={classes.input}
    placeholder={placeholder}
    name={name}
    id={id}
    mask={mask}
    type={typePassword}
    value={value}
    onChange={onChange}
    required={required}
    multiple={multiple}
  />


  return (
    <div className={cls.join(' ')}>
      {input}
    </div>
  )
}

export default Input
