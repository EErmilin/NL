import moment from "moment";
import React from "react"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavBar from "../../../../components/NavBar/NavBar";
import ButtonDefault from "../../../../components/UI/btns/Button/Button";
import { getProfile } from "../../../../store/actions/authActions";
import classes from "./ReferalProgram.module.scss";

export const ReferalProgram = () => {

  const user = useSelector(state => state.auth.user);

  return (
    <div className={classes.wrapper}>
      <div className={classes.text}>
        <h2>Referral program</h2>
        <p>The company has a referral program. It aims to help the partner attract their customers to the official NL International store, as well as to register new partners and members of the Client Club program.</p>
        <p>Before you start using referral links, read the Rules of the referral program and frequently asked questions about it.</p>
      </div>
      <div className={classes.link}>
        <p>The candidate registers himself as a manager by clicking on the referral link for registration.</p>
        <ButtonDefault title={'Copy ref. code'} className={classes.link_btn}
          onClick={() => {
            navigator.clipboard.writeText(`https://testdev.eu-nl.com/registrationpartner?partner=${user.partner_code}&first=${user.first_name}&last=${user.last_name}`)
          }} />
      </div>
      <div className={classes.link}>
        <p>The candidate registers himself as a client by clicking on the referral link for registration.</p>
        <ButtonDefault title={'Copy ref. code'} className={classes.link_btn}
             onClick={() => {
              navigator.clipboard.writeText(`https://testdev.eu-nl.com/registration?partner=${user.referral_code}&first=${user.first_name}&last=${user.last_name}`)
            }} />
      </div>
      <div className={classes.notification}>Before you get access to the referral program, you first need to familiarize yourself with the rules, frequently asked questions, then tick the box and click Read., after which referral links will be available.</div>
    </div>
  )
}

export default ReferalProgram
