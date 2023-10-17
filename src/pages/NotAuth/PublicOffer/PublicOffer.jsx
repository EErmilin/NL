import React from "react"
import classes from "./PublicOffer.module.scss";
import InfoPageUnit from "../../../components/InfoPageUnit/InfoPageUnit";
import axiosCustom from "../../../axios/axiosCustom";
import { useQuery } from "@tanstack/react-query";

export const PublicOffer = () => {

  const { data, isInitialLoading, isError } = useQuery(["public-offer"], () =>
    axiosCustom.get("https://testapi.eu-nl.com/api/v1/pages/public-offer")
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

export default PublicOffer
