import { useQuery } from "@tanstack/react-query";
import { Spin } from "antd";
import moment from "moment";
import React from "react"
import { useMemo } from "react";
import { useSelector } from "react-redux";
import axiosCustom from "../../../../../axios/axiosCustom";
import CustomPagination from "../../../../../components/Pagination/Pagination";
import OrderItem from "../components/OrderItem/OrderItem";
import classes from "./OrdersMain.module.scss";


export const OrdersMain = () => {
  const locale = useSelector(state => state.router.locale);
  const { data, isInitialLoading, isError } = useQuery(["orders", { locale: locale }], () =>
    axiosCustom.get("https://testapi.eu-nl.com/api/v1/customer/orders?sort=id")
  );

  const templateProducts = useMemo(() => {
    if (!data) return
    return data.data?.data?.map((item, key) => <OrderItem item={item} key={key} />)
  }, [data])
  if (!data) return <div className={classes.loader}><Spin size="large" /></div>
  return (
    <div className={classes.wrapper}>
      <h2 className={classes.title}>My orders</h2>
      {templateProducts}
      {
        // data?.data?.data?.total > 10 &&  <CustomPagination total={data?.data?.data?.total} page={page} changePage={setPage} />
      }
    </div>
  )
}

export default OrdersMain
