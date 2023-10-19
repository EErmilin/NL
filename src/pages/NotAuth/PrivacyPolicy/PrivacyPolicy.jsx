import React from "react"
import classes from "./PrivacyPolicy.module.scss";
import InfoPageUnit from "../../../components/InfoPageUnit/InfoPageUnit";
import axiosCustom from "../../../axios/axiosCustom";
import { useQueries, useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
export const PrivacyPolicy = () => {

  const locale = useSelector(state => state.router.locale);

  const { data, isInitialLoading, isError } = useQuery(["privacy-policy", { locale: locale }], () =>
    axiosCustom.get("https://testapi.eu-nl.com/api/v1/pages/privacy-policy")
  );


  if (!data) return null
  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <InfoPageUnit title={data.name}>
          <div dangerouslySetInnerHTML={{ __html: data.data.data.html_content }}></div>
        </InfoPageUnit>
      </div>
    </div>
  )
}

export default PrivacyPolicy
