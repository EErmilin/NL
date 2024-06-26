import classes from "./Registration.module.scss";
import React, { useState } from 'react';
import { Button, message, Steps } from 'antd';
import "./Registration.scss"
import { FirstStep } from "./components/FirstStep/FirstStep";
import SecondStep from "./components/SecondStep/SecondStep";
import ThirdStep from "./components/ThirdStep/ThirdStep";
import { useEffect } from "react";
import useToggleVisibility from "../../../hooks/useToggleVisibility";
import ConfirmSmsCodeModal from "../../../components/modals/ConfirmSmsCodeModal/ConfirmSmsCodeModal";
import { useDispatch } from "react-redux";
import { checkPartnerId, getCountres, getSmsCode, login, register, setRegisterData } from "../../../store/actions/authActions";
import { useMemo } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";



export const Registration = () => {

  /** Модалка ввода кода */
  const [isCodeModal, setIsCodeModal, closeIsCodeModal] = useToggleVisibility()
  const [timerCount, setTimerCount] = useState(60)
  const [countries, setCountries] = useState(null)
  const [errors, setErrors] = useState({
    confirmErrors: [],
    referral_code: "",
    phone: "",
    code: "",
  })

  const navigate = useNavigate()
  const [current, setCurrent] = useState(0);
  const dispatcher = useDispatch()

  /** Начальные значения */
  const initialValues = useMemo(() => {
    return {
      referral_code: "",
      gender: null,
      phone: "",
      code: "",
      //country_code: "7",
      country_id: "",
      date_of_birth: "",
      contact_value: "",
      last_name: "",
      contact_type: "",
      first_name: "",
      password: "123456",
      device_name: "web"
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
    if (current === 2) {
      const errorObj = errors.confirmErrors
      errorObj[field] = ""
      setErrors({ ...errorObj, confirmErrors: errorObj })
      handleChange({ target: { name: field, value: value } })
    } else {
      const errorObj = errors
      errorObj[field] = ""
      setErrors(errorObj)
      handleChange({ target: { name: field, value: value } })
    }

  }

  const next = async () => {
    if (current === 0) {
      const response = await dispatcher(checkPartnerId(values.referral_code))
      if (response?.status == 200) {
        return setCurrent(current + 1);
      } else {
        setErrors({ ...errors, referral_code: response.message })
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
      } else {

        if (!response.success && response.data && response.data.phone) {
          setErrors({ ...errors, phone: response.data.phone[response.data.phone.length - 1] })
        } else {
          setErrors({ ...errors, phone: response.message })
        }
      }
    }
  };

  const submit = async () => {
    const data = {
      ...values,
      phone: values.phone.replace(/[^+\d]/g, ''),
      country_id: values.country_id.value
    }
    const response = await dispatcher(register(data))
    if (!response.data.success) {
      const confirmErrors = response.data
      setErrors({ ...errors, confirmErrors })
    } else {
      const data = 
      {
        phone: values.phone.replace(/[^+\d]/g, ''),
        password: "123456",
        device_name: "web"
    }
      const response = await dispatcher(login(data))
      if (response.status === 200) {
        dispatcher(setRegisterData({partner: values.referral_code}))
        navigate(`/registerSucces`)
      }
    }
  }

  const prev = () => {
    setCurrent(current - 1);
  };

  const steps = [
    {
      content: <FirstStep clearErrorAndChange={clearErrorAndChange} values={values} errors={errors} />,
    },
    {
      content: <SecondStep clearErrorAndChange={clearErrorAndChange} values={values} errors={errors} countries={countries} />,
    },
    {
      content: <ThirdStep clearErrorAndChange={clearErrorAndChange} values={values} errors={errors} countries={countries} />,
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
      setErrors={setErrors}
      errors={errors}
      values={values}
      clearErrorAndChange={clearErrorAndChange}
      setTimerCount={setTimerCount}
      timerCount={timerCount}
      next={() => setCurrent(current + 1)}
      btnCancelClick={() => setIsCodeModal(false)}
      closeModal={closeIsCodeModal}
    />
  )



  const getCountresData = async () => {
    const response = await dispatcher(getCountres())
    setCountries(response.data.data)
  }


  useEffect(() => {
     if(current===2){
    getCountresData()
    }
  }, [current])


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
            <Button type="primary" onClick={submit} className={classes.btn}>
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
