import React from "react"
import classes from "./CurrentNews.module.scss";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import axiosCustom from "../../../../../axios/axiosCustom";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../../../../../components/Breadcrumbs/Breadcrumbs";
import NewsSlider from "../../../Main/components/NewsSlider/NewsSlider";

export const CurrentNews = () => {

  const locale = useSelector(state => state.router.locale);
  const { id } = useParams()

  const { data, isInitialLoading, isError } = useQuery(["CurrentNews", { locale: locale, id: id }], () =>
    axiosCustom.get(`https://testapi.eu-nl.com/api/v1/articles/${id}`)
  );

  if (!data) return null
  const item = data?.data?.data
  const BREADCRUMBS = [
    {
      title: "Online store",
    },
    {
      title: <a href="/news">News</a>,
    },
    {
      title: item.title,
    },
  ]
  return (
    <div className={classes.wrapper}>
      <Breadcrumbs items={BREADCRUMBS}></Breadcrumbs>
      <h1 className={classes.title}>{item.title}</h1>
      <div className={classes.btns}><span className={classes.date}>October 8, 2023</span><span className={classes.share}>Share</span></div>
      <img src={item.image} className={classes.image}></img>
      <div className={classes.content} dangerouslySetInnerHTML={{ __html: item.content }}>
      </div>
      <NewsSlider />
    </div>
  )
}

export default CurrentNews
