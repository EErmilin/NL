import classes from "./RegisterSucces.module.scss";
import React from 'react';
import "../../Registration.css"
import ButtonDefault from "../../../../../components/UI/btns/Button/Button";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";

export const RegisterSucces = () => {
  const navigate = useNavigate()
  const registerInfo = useSelector(state => state.auth.registerInfo)
  const [searchParams, setSearchParams] = useSearchParams()
  return (
    <div className={classes.succes}>
      <div>

        <h1 className={classes.succes_title}>Done, Welcome to NL!</h1>
        <div>

          <div className={classes.succes_gray}>Mentor</div>
          <div className={classes.succes_info}>{searchParams.get("partner")}</div>
        </div>
        <div className={classes.succes_left}>
          <div>
            <div className={classes.succes_gray}>You card</div>
            <div className={classes.succes_info}></div>
          </div>
          <div>
            <div className={classes.succes_gray}>Your password</div>
            <div className={classes.succes_info}>123456</div>
          </div>
        </div>

      </div>
      <div className={classes.succes_right}>
        <p className={classes.succes_right_text}>Now you are authorized on the NL website under your manager ID and can make purchases using your Personal Volume.</p>
        <p className={classes.succes_right_text}>We sent you an SMS and E-mail with an ID and password to access your Personal Account</p>
        <ButtonDefault title="Your personal office" className={classes.succes_right_btn} onClick={() => navigate("/personal-area")}></ButtonDefault>
      </div>
    </div>
  )
}

export default RegisterSucces
