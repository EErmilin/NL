import React from "react"
import classes from "./Starter.module.scss";
import { ReactComponent as StarterImg } from "../../../assets/svg/starter.svg";
import axiosCustom from "../../../axios/axiosCustom";
import { useQueries, useQuery } from "@tanstack/react-query";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";
import { Spin } from "antd";
import StarterPack from "../../../components/StarterPack/StarterPack";
import { useSelector } from "react-redux";

const backUrl = "https://testapi.eu-nl.com"

export const Starter = () => {

  const BREADCRUMBS = [
    {
      title: "Online store",
    },

    {
      title: "Starter"
    },
  ]
  const locale = useSelector(state => state.router.locale);
  const { data, isInitialLoading, isError } = useQuery([`starter`,{locale}], () => {
    return axiosCustom(`${backUrl}/api/v1/product-bundles`)
  }
  );

  const templatePacks = data?.data?.data?.map((pack) => <StarterPack pack={pack} />)


  return (
    <div className={classes.wrapper}>
      <Breadcrumbs items={BREADCRUMBS}></Breadcrumbs>

      <div className={classes.top}>
        <div>
          <h1>Starter Packs</h1>
          <div className={classes.top_bold}>Get a quick and easy start with NL!</div>
          <p>Create your individual starter pack using our designer, where you can choose products according to your preferences and needs. The price will be the same as the usual starter package, and you will receive a reward of 70PV and activate the partner contract.</p>
          <div className={classes.notificaton}><div className={classes.notificaton_bold}>Important! Delta is not credited to your account for getting the Starter Pack.</div>
            *The color of the shaker may vary when the set is received.</div>
        </div>
        <div className={classes.top_img}>
          <StarterImg />
        </div>
      </div>
      {!data ? <div className={classes.spin}><Spin size="large" /></div> : <div>{templatePacks}</div>}
    </div>
  )
}

export default Starter
