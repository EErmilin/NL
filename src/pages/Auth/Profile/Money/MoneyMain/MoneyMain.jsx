import moment from "moment";
import React from "react"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonDefault from "../../../../../components/UI/btns/Button/Button";
import classes from "./MoneyMain.module.scss";
import { DatePicker, Space } from 'antd';
import { useNavigate } from "react-router-dom";
import CustomDateRangePicker from "../../../../../components/UI/areas/CustomDateRangePicker/CustomDateRangePicker";
import { useState } from "react";
import CustomSelect from "../../../../../components/UI/areas/CustomSelect/CustomSelect";
const { RangePicker } = DatePicker;

export const MoneyMain = () => {

  const [dates, setDates] = useState(null)
  const user = useSelector(state => state.auth.user);
  const navigate = useNavigate()
  const [error, setError] = useState('')

  const datesToUrl = dates?.length && dates.map((date) => date.format("YYYY-MM-DD"))

  const checkOptions = [
    {
      label: "Unit account, EUR",
      value: 'unit-partner'
    },
    {
      label: user?.role === "business-partner" ? "Reward " : "Delta",
      value: "reward"
    },
  ]
  const [check, setCheck] = useState(checkOptions[0])

  const show = () => {
    if (datesToUrl) {
      return navigate(`info?page=1&from=${datesToUrl[0]}&to=${datesToUrl[1]}&check=${user?.role === 'client' ? 'unit-client' : check.value}`)
    }
    return setError('Select Dates')
  }

  useEffect(() => {
    setError('')
  }, [dates])

  if (!user) return
  return (
    <div className={classes.wrapper}>
      <h2 className={classes.title}>Money</h2>
      <div className={classes.info}>
        <div>
          <div className={classes.gray}>Active account</div>
          <div className={classes.text}>Unit account</div>
          {user.is_partner && <div className={classes.text}>{user.role === "business-partner" ? "Reward " : "Delta"} account</div>}
        </div>
        <div className={classes.balance}>
          <div className={classes.gray}>Balance</div>
          <div className={classes.text}>{user.is_partner ? user.balance_unit_partner : user.balance_unit_client} €</div>
          {user.is_partner && <div className={classes.text}>{user.balance_reward}{!user.role === "business-partner" ? '' : " €"}</div>}
        </div>
      </div>
      <div className={classes.text}>Internal account statement</div>
      <div className={classes.history}>
        <div className={classes.text}>History of all transactions made with your accounts</div>
        <div className={classes.filters}>
          <div className={classes.date_wrp}>
            <div className={classes.gray}>Period</div>
            <CustomDateRangePicker setDates={setDates} error={error} onClick={() => setError('')} dates={dates} />
          </div>
          {user?.role !== 'client' && <CustomSelect
            value={check}
            label={'Period'}
            className={classes.filters_select}
            classNameLabel={classes.filters_select_label}
            defa
            // errorMessage={errors.confirmErrors["country_id"] ? errors.confirmErrors["country_id"][0] : ""}
            options={checkOptions}
            onChange={(e) => {
              return setCheck(e)
            }} />}
        </div>
        <div className={classes.btns}>
          <ButtonDefault className={classes.btns_black} title={"Show"} onClick={show} ></ButtonDefault>
          <ButtonDefault title={"Export to Excel"}></ButtonDefault>
        </div>
      </div>
    </div >
  )
}

export default MoneyMain
