import moment from "moment";
import React from "react"
import './Date.scss'
import classes from "./CustomDateRangePicker.module.scss";
import { DatePicker, Space } from 'antd';
import dayjs from "dayjs";
const { RangePicker } = DatePicker;

export const CustomDateRangePicker = ({ className, setDates, error, onClick, dates }) => {

  return (
    <>
      <div className={classes.wrapper} onClick={onClick}>
        <RangePicker title className={className} format="DD/MM/YYYY" onChange={(value) => setDates(value)} value={dates?? null}/>
      </div>
      {error && <p className={classes.error}>{error}</p>}
    </>
  )
}

export default CustomDateRangePicker
