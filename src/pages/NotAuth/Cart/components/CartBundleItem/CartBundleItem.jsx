import React from "react"
import { useDispatch } from "react-redux";
import { deleteCartItem } from "../../../../../store/actions/orderActions";
import classes from "./CartBundleItem.module.scss";


export const CartBundleItem = ({ item }) => {

  const dispatcher = useDispatch()

  return (
    <div className={classes.cart_products}>
    <div className={classes.cart_products_item}>
      <div className={classes.cart_products_item_info}>
        <div>
          <div className={classes.cart_products_item_title}>{item.name}</div>
          <div>

          </div>
        </div>
        <div>
          <div className={classes.delete} onClick={() => dispatcher(deleteCartItem(item.id))}>Delete</div>
          <div className={classes.cart_products_item_price}>{item.formatted_total}</div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default CartBundleItem
