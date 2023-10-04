import classes from "./Registration.module.scss";
import React, { useState } from 'react';
import { Button, message, Steps } from 'antd';
import "./Registration.css"
import { FirstStep } from "./components/FirstStep/FirstStep";
import SecondStep from "./components/SecondStep/SecondStep";
import ThirdStep from "./components/ThirdStep/ThirdStep";
import { useEffect } from "react";
import useToggleVisibility from "../../../hooks/useToggleVisibility";
import ConfirmSmsCodeModal from "../../../components/modals/ConfirmSmsCodeModal/ConfirmSmsCodeModal";
import { useDispatch } from "react-redux";
import { checkPartnerId, getSmsCode } from "../../../store/actions/authActions";
import { useMemo } from "react";
import { useFormik } from "formik";



export const Registration = () => {

  /** Модалка ввода кода */
  const [isCodeModal, setIsCodeModal, closeIsCodeModal] = useToggleVisibility(false)
  const [timerCount, setTimerCount] = useState(60)



  const [current, setCurrent] = useState(0);
  const dispatcher = useDispatch()

  /** Начальные значения */
  const initialValues = useMemo(() => {
    return {
      id: "",
      phone: "",
      code: ""
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
    handleChange({ target: { name: field, value: value } })
  }

  const next = async () => {
    if (current === 0) {
      const response = await dispatcher(checkPartnerId(values.id))
      if (response?.status == 200) {
        return setCurrent(current + 1);
      }
    }
    if (current === 1) {
      const response = await dispatcher(getSmsCode(values.phone.replace(/[^+\d]/g, '')))
      if (response.data.success || response.data.seconds) {
        if (response.data.seconds) {
          setTimerCount(response.data.seconds)
        } else {
          setTimerCount(60)
        }
        return setIsCodeModal(true)
      }
    }


  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const steps = [
    {
      content: <FirstStep clearErrorAndChange={clearErrorAndChange} values={values} />,
    },
    {
      content: <SecondStep clearErrorAndChange={clearErrorAndChange} values={values} />,
    },
    {
      content: <ThirdStep clearErrorAndChange={clearErrorAndChange} values={values} />,
    },
  ];

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  useEffect(() => {
    document.body.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }, [current])


  const templateCodeModal = isCodeModal && (
    <ConfirmSmsCodeModal
      values={values}
      clearErrorAndChange={clearErrorAndChange}
      setTimerCount={setTimerCount}
      timerCount={timerCount}
      next={() => setCurrent(current + 1)}
      btnCancelClick={() => setIsCodeModal(false)}
      closeModal={closeIsCodeModal}
    />
  )


  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <h1 className={classes.title}>Registration</h1>
        <p className={classes.text}>Participation in the Client Club loyalty program with a personal consultant</p>
        <ul className={classes.ul}>
          <li>Cashback up to 10% on every purchase after connecting
            to the program</li>
          <li>Payment for purchases in units</li>
          <li>Personal consultant on products and delivery/payment methods</li>
        </ul>
        <Steps current={current} items={items} />
        <div >{steps[current].content}</div>
        <div
          style={{
            marginTop: 24,
          }}
        >
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()} className={classes.btn}>
              Continue
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={() => message.success('Processing complete!')} className={classes.btn}>
              Registration
            </Button>
          )}
          {current > 0 && (
            <Button
              className={classes.back}
              onClick={() => prev()}
            >
              Back
            </Button>
          )}
        </div>

      </div>
      {templateCodeModal}
    </div>
  )
}

export default Registration
