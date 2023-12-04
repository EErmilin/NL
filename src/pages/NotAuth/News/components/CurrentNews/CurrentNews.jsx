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
  const date = item.created_at && moment(item.created_at).utc()
  return (
    <div className={classes.wrapper}>
      <Breadcrumbs items={BREADCRUMBS}></Breadcrumbs>
      <h1 className={classes.title}>{item.title}</h1>
      <div className={classes.btns}>{date && <span className={classes.date}>{date?.format('LL')}</span>}<span className={classes.share}>Share</span></div>
      <img src={item.image} className={classes.image}></img>
      <div className={classes.content} dangerouslySetInnerHTML={{ __html: item.content }}>
      </div>
      <NewsSlider />
    </div>
  )
}

export default CurrentNews
