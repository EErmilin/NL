import React from "react"
import classes from "./OrderBandle.module.scss";
import { formatedSum } from "../../../../../../functions/functions";


export const OrderBandle = ({ item }) => {

  const renderItems = item.children.map((item, key)=><img src={item.product.base_image.small_image_url} key={key} className={classes.img}></img>)

  return (
    <div className={classes.item}>
        <div className={classes.item_info_top}>
          <div className={classes.item_info_product}>
            <div className={classes.item_value}>{item.name}</div>
          </div>
          <div className={classes.item_price}>
            <div className={classes.item_gray}>Total cost</div>
            <div className={classes.item_price}>{formatedSum(item.price)}<span className={classes.item_price_pv}>{item?.product?.pv ? "/" + Number(item.product.pv) * item.qty_ordered + " PV" : null}</span></div>
          </div>
        </div>
        <div className={classes.img_wrp}><div className={classes.counter}>{item.children.length} items</div>{renderItems}</div>
    </div>
  )
}

export default OrderBandle
