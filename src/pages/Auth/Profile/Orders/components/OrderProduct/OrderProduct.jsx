import React from "react"
import classes from "./OrderProduct.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartItem, getCart, updateCard } from "../../../../../../store/actions/orderActions";
import { useEffect } from "react";
import { useState } from "react";
import { formatedSum } from "../../../../../../functions/functions";
import { NavLink, useNavigate } from "react-router-dom";


export const OrderProduct = ({ item }) => {


  const navigate = useNavigate()

  console.log('@@@@@@@@@@@@')
  console.log(item)
  return (
    <div className={classes.item}>
      <img src={item.product?.images[0]?.url} className={classes.item_img} onClick={()=>navigate(`/product/${item.product_id}`)}></img>
      <div className={classes.item_info}>
        <div className={classes.item_info_wrp}>
          <div className={classes.item_info_product}>
            <div className={classes.item_gray}>{item.type}</div>
            <NavLink className={classes.item_value} to={`/product/${item.product_id}`}>{item.name}</NavLink>
          </div>
          <div>
            <div className={classes.item_gray}>Quantity</div>
            <div className={classes.item_value}>{item.qty_ordered}</div>
          </div>
          <div className={classes.item_price}>
            <div className={classes.item_gray}>Total cost</div>
            <div className={classes.item_price}>{formatedSum(item.price)}<span className={classes.item_price_pv}>{item?.product?.pv ? "/" + Number(item.product.pv) * item.qty_ordered + " PV" : null}</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderProduct
