import { isEmptyArray } from "formik";
import React from "react"
import { useDispatch } from "react-redux";
import { formatedSum } from "../../../../../functions/functions";
import { deleteCartItem } from "../../../../../store/actions/orderActions";
import classes from "./CartBundleItem.module.scss";


export const CartBundleItem = ({ item }) => {

  const dispatcher = useDispatch()

  const imgArray = []
  item?.children?.forEach(element => {
    for (let index = 0; index < element.quantity; index++) {
      imgArray.push(<img src={element.product?.base_image.small_image_url} className={classes.img}></img>)
    }
  })

  const count = item?.children?.reduce(
    (accumulator, currentValue) => accumulator + currentValue.quantity,
    0,
  );

  return (
    <div className={classes.cart_products}>
      <div className={classes.cart_products_item}>
        <div className={classes.cart_products_item_info}>
          <div>
            <div className={classes.cart_products_item_title}>{item.name}</div>
            <div>
              <div className={classes.img_wrp}><div className={classes.counter}>{count} items</div>{imgArray}</div>
            </div>
          </div>
          <div>
            <div className={classes.delete} onClick={() => dispatcher(deleteCartItem(item.id))}>Delete</div>
            <div className={classes.cart_products_item_price}>{formatedSum(item.price)}{item?.product?.pv && <span className={classes.pv}> /{item?.product?.pv} PV</span>}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartBundleItem
