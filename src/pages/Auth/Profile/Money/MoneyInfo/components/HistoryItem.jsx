import moment from "moment";
import React from "react"
import classes from "./HistoryItem.module.scss";

export const HistoryItem = ({ item }) => {
  console.log('!!!!!!!!!!!')
  console.log(item)
  const date = moment(item.created_at).utc().format('DD/MM/YYYY');
  const time = moment(item.created_at).utc().format('HH:mm');
  return (
    <div className={classes.wrapper}>
      <div className={classes.left}>
        <div className={classes.date}>{date}</div>
        <div className={classes.time}>{time}</div>
      </div>
      <div className={classes.left}>
        <div>{item.additional_data.message.en}</div>
      </div>
      <div>
        <div>{item.amount>0 ?<span className={classes.coming}>+ {item.amount}</span> : "-"}</div>
      </div>
      <div>
        <div>{item.amount<0 ?<span className={classes.expenditure}>- {item.amount}</span>: "-"}</div>
      </div>
    </div>
  )
}

export default HistoryItem
