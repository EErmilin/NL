import ModalWithBackground from '../ModalWithBackground/ModalWithBackground';
import classes from './ConfirmSmsCodeModal.module.scss';
import React from 'react';
import ButtonDefault from '../../UI/btns/Button/Button';
import ReactCodeInput from 'react-code-input'
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { getSmsCode, sendCode } from '../../../store/actions/authActions';

const ConfirmSmsCodeModal = ({ closeModal, btnCancelClick, next, timerCount, setTimerCount, clearErrorAndChange, values, setErrors, errors }) => {

    const dispatcher = useDispatch()
    const [isSend, setSend] = useState(true)
    const timer = useRef();

    const confirm = async () => {
        const response = await dispatcher(sendCode(values.code, values.phone.replace(/[^+\d]/g, '')))

        if (response.data?.success) {
            btnCancelClick()
            next()
        }
        if (!response.success && response.data.code) {
            setErrors({ ...errors, code: response.data.code[response.data.code.length - 1] })
          } else {
            setErrors({ ...errors, code: response.message })
          }

    }

    useEffect(() => {
        if (!isSend) return
        let i = timerCount > 0 ? -timerCount : timerCount
        timer.current = setInterval(() => {
            if (i < 0) {
                setTimerCount(prevState => {
                    let number = prevState > 0 ? - prevState : prevState
                    return number + 1
                })
                i++
            } else {
                setSend(false)
                clearInterval(timer.current);
            }
        }, 1000)
        return () => {
            clearInterval(timer.current);
            setSend(false)
        }
    }, [isSend]);

    const reSend = async () => {
        const response = await dispatcher(getSmsCode(values.phone.replace(/[^+\d]/g, '')))
        if (response.success || response.data) {
            if (response.data.seconds) {
                setTimerCount(response.data.seconds)
            } else {
                setTimerCount(60)
            }
            setSend(true)

        }
    };

    const props = {
        className: classes.code,
        inputStyle: {
            textAlign: "center",
            padding: "0",
            fontVariantNumeric: " lining-nums proportional-nums",
            margin: '0 6px',
            width: '40px',
            fontSize: '20px',
            height: '56px',
            border: '1px solid #ECECEE'
        },
        inputStyleInvalid: {
            fontFamily: 'monospace',
            margin: '4px',
            MozAppearance: 'textfield',
            width: '15px',
            borderRadius: '3px',
            fontSize: '14px',
            height: '26px',
            paddingLeft: '7px',
            backgroundColor: 'black',
            color: 'red',
            border: '1px solid red'
        }
    }

    return (
        <ModalWithBackground
            closeModal={closeModal}
            btnCancelClick={btnCancelClick}
            width={360}
        >
            <div className={classes.modal}>
                <h3 className={classes.modal_title}>Code from SMS</h3>
                <p className={classes.modal_text}>Enter the code specified in the SMS</p>

                <ReactCodeInput type='number' fields={4}
                    onChange={(e) => {
                        return clearErrorAndChange("code", e)
                    }}
                    {...props} />
                      {errors.code &&  <span className={classes.error}>{errors.code}</span>}
                {timerCount === 0 ? <span className={classes.modal_timer} onClick={reSend}>Resend the code</span> :
                    <span className={classes.modal_timer}>Resend the code in {(timerCount < 0 ? -timerCount : timerCount) + " "} seconds!</span>}
                <ButtonDefault title={"Continue"} onClick={confirm} />
             
            </div>



        </ModalWithBackground>

    );
};

export default ConfirmSmsCodeModal;

