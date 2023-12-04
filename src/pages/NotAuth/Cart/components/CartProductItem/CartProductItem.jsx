import React from "react"
import classes from "./CartProductItem.module.scss";
import fakeBrand from '../../../../../assets/img/fakeProduct.png';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartItem, getCart, updateCard } from "../../../../../store/actions/orderActions";
import { useEffect } from "react";
import { useState } from "react";
import { formatedSum } from "../../../../../functions/functions";


export const CartProductItem = ({item}) => {
  console.log('!!!!!!!!!!')
  console.log(item)

  const [count, setCount] = useState(item.quantity)
  const dispatcher = useDispatch()

  return (
          <div className={classes.cart_products_item}>
            <img src={item.product?.images[0]?.url} className={classes.cart_products_item_img}></img>
            <div className={classes.cart_products_item_info}>
              <div className={classes.cart_products_item_info_header}>
                <div>
                  <div className={classes.cart_products_item_title}>{item.name}</div>
                  <div className={classes.cart_products_item_price}>{formatedSum(item.base_total)}<span className={classes.cart_products_item_price_pv}>{item?.product?.pv ? "/" + Number(item.product.pv)*item.quantity + " PV" : null}</span></div>
                </div>
                <div className={classes.cart_products_item_counter}>
                  <span className={classes.cart_products_item_counter_btn} onClick={() => {setCount(count - 1); dispatcher(updateCard(item.id, count))}}>-</span>
                  <span >{item.quantity}</span>
                  <span className={classes.cart_products_item_counter_btn} onClick={() => {setCount(count + 1); dispatcher(updateCard(item.id, count))}}>+</span>
                </div>
              </div>
              <div className={classes.cart_products_item_btns}>
                <span className={classes.cart_products_item_heart}>Add to wishlist</span>
                <span className={classes.cart_products_item_delete} onClick={() => dispatcher(deleteCartItem(item.id))}>Delete</span>
              </div>
            </div>
          </div>
  )
}

export default CartProductItem
