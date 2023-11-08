import moment from "moment";
import React from "react"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavBar from "../../../../components/NavBar/NavBar";
import ButtonDefault from "../../../../components/UI/btns/Button/Button";
import { getProfile } from "../../../../store/actions/authActions";
import classes from "./Money.module.scss";
import { DatePicker, Space } from 'antd';
import './Date.scss'
const { RangePicker } = DatePicker;

export const Money = () => {

  const user = useSelector(state => state.auth.user);

  if(!user)return
  return (
    <div className={classes.wrapper}>
      <h2 className={classes.title}>Money</h2>
      <div className={classes.info}>
        <div>
          <div className={classes.gray}>Active account</div>
          <div className={classes.text}>Unit account</div>
          {user.is_partner && <div className={classes.text}>{user.role === "business-partner" ? "Reward ": "Delta"} account</div>}
        </div>
        <div className={classes.balance}>
          <div className={classes.gray}>Balance</div>
          <div className={classes.text}>{user.is_partner ? user.balance_pv: user.balance_unit_client + " €"} </div>
           {user.is_partner && <div className={classes.text}>{user.balance_reward} €</div>}
        </div>
      </div>
      <div className={classes.text}>Internal account statement</div>
      <div className={classes.history}>
        <div className={classes.text}>History of all transactions made with your accounts</div>
        <div className={classes.date_wrp}>
          <div className={classes.gray}>Period</div>
          <RangePicker title className={classes.date} />
        </div>
        <div className={classes.btns}>
          <ButtonDefault className={classes.btns_black} title={"Show"}></ButtonDefault>
          <ButtonDefault title={"Export to Excel"}></ButtonDefault>
        </div>
      </div>
    </div>
  )
}

export default Money
