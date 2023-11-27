import React from "react"
import classes from "./NewsList.module.scss";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import NewsItem from "../../../Main/components/NewsItem/NewsItem";
import axiosCustom from "../../../../../axios/axiosCustom";
import Breadcrumbs from "../../../../../components/Breadcrumbs/Breadcrumbs";

export const NewsList = () => {

  const locale = useSelector(state => state.router.locale);

  const { data, isInitialLoading, isError } = useQuery(["News", { locale: locale }], () =>
    axiosCustom.get("https://testapi.eu-nl.com/api/v1/articles")
  );

  const templateProducts = useMemo(() => {
    if (!data) return
    return data.data?.data?.map((item, key) => <NewsItem item={item} key={key} />)
  }, [data])

  const BREADCRUMBS = [
    {
      title: "Online store",
    },
    {
      title: "News",
    },
  ]

  if (!data) return null
  return (
    <div className={classes.wrapper}>
      <Breadcrumbs items={BREADCRUMBS}/>
      <h1 className={classes.title}>News</h1>
      <div className={classes.content}>
        {templateProducts}
      </div>
    </div>
  )
}

export default NewsList
