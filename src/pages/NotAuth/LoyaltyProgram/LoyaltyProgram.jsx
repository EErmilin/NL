import React from "react"
import classes from "./LoyaltyProgram.module.scss";
import InfoPageUnit from "../../../components/InfoPageUnit/InfoPageUnit";
import axiosCustom from "../../../axios/axiosCustom";
import { useQuery } from "@tanstack/react-query";

export const LoyaltyProgram = () => {

  const { data, isInitialLoading, isError } = useQuery(["loyalty-program"], () =>
    axiosCustom.get("https://testapi.eu-nl.com/api/v1/pages/loyalty-program")
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

export default LoyaltyProgram
