import classes from "./RegisterSucces.module.scss";
import React from 'react';
import "../../Registration.css"
import ButtonDefault from "../../../../../components/UI/btns/Button/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProfile } from "../../../../../store/actions/authActions";
import moment from "moment";

export const RegisterSucces = () => {
  const navigate = useNavigate()

  const user = useSelector(state => state.auth.user);

  const dispatcher = useDispatch()

  useEffect(() => {
    dispatcher(getProfile())
  }, [])

  if(!user)return

  return (
    <div className={classes.succes}>
      <div>

        <h1 className={classes.succes_title}>Done, Welcome to NL!</h1>
        <div>
          <div className={classes.succes_gray}>Mentor</div>
          <div className={classes.succes_info}><span>{user?.parent_customer?.first_name + " " + user?.parent_customer?.last_name + " "}</span><span className={classes.succes_info_id}>(ID {user?.parent_customer?.referral_code})</span></div>
        </div>
        <div>

          <div className={classes.succes_gray}>Starting period</div>
          <div className={classes.succes_info}><span>{moment(user.created_at).format("DD/MM/YYYY") + " - " + moment(user.created_at).add(1, 'years').format("DD/MM/YYYY")} </span></div>
        </div>
        <div className={classes.succes_left}>
          <div>
            <div className={classes.succes_gray}>You card</div>
            <div className={classes.succes_info}>{user?.referral_code}</div>
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
