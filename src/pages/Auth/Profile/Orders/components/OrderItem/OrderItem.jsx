
import moment from "moment";
import React from "react"
import { useNavigate } from "react-router-dom";
import ButtonDefault from "../../../../../../components/UI/btns/Button/Button";
import { formatedSum } from "../../../../../../functions/functions";
import classes from "./OrderItem.module.scss";


export const OrderItem = ({ item }) => {

  const navigate = useNavigate()



  const templateImage = () => {
    const images = item.items.map((item, key) => <img className={classes.img} key={key} src={item.product.base_image.small_image_url}></img>)
    if (images.length < 5) return <div className={classes.img_wrp}>{images}</div>
    return <div className={classes.img_wrp}>{images.slice(0, 3)}<div className={classes.img_counter}>+{images.length -4}</div></div>
  }

  console.log('########')
  console.log(item)
  const totalPV = item.items.reduce((partialSum, a) => partialSum + Number(a.product.pv)*a.qty_ordered, 0);
  return (
    <div className={classes.wrapper}>
      <div className={classes.title}>Order № {item.id} dated {moment(item.created_at).utc().format("DD/MM/YYYY")}</div>
      <div className={classes.top}>
        <div className={classes.top_info}>
          <div>
            <div className={classes.top_gray}>Invoice number</div>
            <div>0004-00004-04545</div>
          </div>
          <div>
            <div className={classes.top_gray}>Status</div>
            <div>{item.status_label}</div>
          </div>
          <div>
            <div className={classes.top_gray}>Delivery</div>
            <div>Delivery service</div>
          </div>
          <div>
            <div className={classes.top_gray}>Period of the order</div>
            <div>Sept 2023</div>
          </div>
        </div>
        <ButtonDefault className={classes.btn} title={'See details'} onClick={() => navigate(`/personal-area/orders/${item.id}`)} />
      </div>
      <div className={classes.bottom}>
        <div className={classes.bottom_left}>
          <div className={classes.bottom_count}>{item.items.length} items</div>
          {templateImage()}
        </div>
        <div><div className={classes.bottom_total}>Total</div><span className={classes.bottom_price}>{formatedSum(item.grand_total)}</span><span className={classes.bottom_price_pv}> {totalPV ? "/" + Number(totalPV) + " PV" : null}</span></div>
      </div>
    </div>
  )
}

export default OrderItem
