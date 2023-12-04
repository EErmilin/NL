import { useQuery } from "@tanstack/react-query";
import { Spin } from "antd";
import moment from "moment";
import React from "react"
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import axiosCustom from "../../../../../../axios/axiosCustom";
import { formatedSum } from "../../../../../../functions/functions";
import CartBundleItem from "../../../../../NotAuth/Cart/components/CartBundleItem/CartBundleItem";
import CartProductItem from "../../../../../NotAuth/Cart/components/CartProductItem/CartProductItem";
import OrderBandle from "../OrderBandle/OrderBandle";
import OrderProduct from "../OrderProduct/OrderProduct";
import classes from "./CurrentOrder.module.scss";


export const CurrentOrder = () => {

  const locale = useSelector(state => state.router.locale);
  const { id } = useParams()

  const { data, isInitialLoading, isError } = useQuery([`orders${id}`, { locale: locale, id: id }], () => axiosCustom.get(`https://testapi.eu-nl.com/api/v1/customer/orders/${id}`));




  const item = data?.data?.data
  const templateProducts = useMemo(() => {
    return item?.items.map((item) => {
      if (item.type === "bundle") {
        return
      }
      return <OrderProduct item={item} />
    })

  }, [item])

  const templateBundle = useMemo(() => {
    return item?.items.map((item) => {
      if (item.type === "bundle") {
        return <OrderBandle item={item} />
      }
      return
    })
  }, [item])

  if (!item) return <div className={classes.loader}><Spin size="large" /></div>



  return (
    <div className={classes.wrapper}>
      <NavLink to={'/personal-area/orders'} className={classes.return}>Return my orders</NavLink>
      <h2 className={classes.title}>Order № 0004-00004-04545 dated {moment(item.created_at).utc().format("DD/MM/YYYY")}</h2>
      <div>
        {templateBundle}
        {templateProducts}
        <div className={classes.price}>
          <div className={classes.price_wrp}>
            <div><span>Products ({item.items?.length}):</span><span>{formatedSum(item.base_grand_total)}</span></div>
            <div><span>Delivery:</span><span>116 €</span></div>
            <div className={classes.price_total}><span  className={classes.price_total}>Total:</span><span className={classes.price_total_price}>{formatedSum(item.grand_total)}</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentOrder
