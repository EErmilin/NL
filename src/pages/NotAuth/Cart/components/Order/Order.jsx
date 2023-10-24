import React from "react"
import { NavLink, useNavigate } from "react-router-dom";
import Breadcrumbs from "../../../../../components/Breadcrumbs/Breadcrumbs";
import CustomSelect from "../../../../../components/UI/areas/CustomSelect/CustomSelect";
import ButtonDefault from "../../../../../components/UI/btns/Button/Button";
import classes from "./Order.module.scss";


export const Order = () => {
  
  const navigate = useNavigate()

  const BREADCRUMBS = [
    {
      title: "Online store",
    },

    {
      title: "Make an order"
    },
  ]

  return (
    <div className={classes.order}>
      <div className={classes.order_content}>
        <Breadcrumbs items={BREADCRUMBS}></Breadcrumbs>
        <h1 className={classes.order_title}>Make an order</h1>
        <div className={classes.order_sub_title}>Order to</div>
        <CustomSelect placeholder={"select a country*"}></CustomSelect>
      </div>
      <div className={classes.order_total}>
          <h2 className={classes.order_total_title}>Your order:</h2>
          <div className={classes.order_total_products_wrp}><span className={classes.order_total_products}>Products (4):</span> <span className={classes.order_total_products}>60 €/20 PV</span></div>
          <div className={classes.order_total_price_wrp}>
            <span className={classes.order_total_price_title}>Total:</span>
            <span className={classes.order_total_price}>60 €/20 PV</span>
          </div>
          <ButtonDefault className={classes.order_total_btn} onClick={()=>navigate("/cart/receiving")} title={"Check out"}></ButtonDefault>
        </div>
    </div>
  )
}

export default Order
