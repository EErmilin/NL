import React from "react"
import classes from "./Business.module.scss";
import InfoPageUnit from "../../../components/InfoPageUnit/InfoPageUnit";
import axios from "axios";
import axiosCustom from "../../../axios/axiosCustom";
import { useQuery } from "@tanstack/react-query";

export const Business = () => {

  const { data, isInitialLoading, isError } = useQuery(["Business"], () =>
  axiosCustom.get("https://testapi.eu-nl.com/api/v1/pages/business")
);

if (!data) return null
  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <InfoPageUnit title={data?.name}>
          <div dangerouslySetInnerHTML={{ __html: data.data.data.html_content }}></div>
        </InfoPageUnit>
      </div>
    </div>
  )
}

export default Business
