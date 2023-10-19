import React from "react"
import classes from "./OurStory.module.scss";
import InfoPageUnit from "../../../components/InfoPageUnit/InfoPageUnit";
import axios from "axios";
import axiosCustom from "../../../axios/axiosCustom";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
export const OurStory = () => {

  const locale = useSelector(state => state.router.locale);

  const { data, isInitialLoading, isError } = useQuery(["OurStory", { locale: locale }], () =>
    axiosCustom.get("https://testapi.eu-nl.com/api/v1/pages/our-story")
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

export default OurStory
