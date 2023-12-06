import { useQuery } from "@tanstack/react-query";
import moment from "moment";
import React from "react"
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import axiosCustom from "../../../../axios/axiosCustom";
import { Swiper, SwiperSlide } from 'swiper/react';
import baner from '../../../../assets/img/fakeInst.png';
import classes from "./PersonalOfficeClient.module.scss";
import fakeInst from '../../../../assets/img/Banner.png';
import MainSlider from "../../../NotAuth/Main/components/MainSlider/MainSlider";
import Slider from "../../../../components/CustomSlider/CustomSlider";

export const PersonalOfficeClient = () => {

  const user = useSelector(state => state.auth.user);
  const locale = useSelector(state => state.router.locale);

  const { data, isInitialLoading, isError } = useQuery(["News", { locale: locale }], () =>
    axiosCustom.get("https://testapi.eu-nl.com/api/v1/articles")
  );


  const templateNews = useMemo(() => {

    return data?.data?.data.map((item) => {
      const date = item.created_at && moment(item.created_at).utc()
      return <div className={classes.new}>
        <div className={classes.new_date}>{date?.format('LL')}</div>
        <div className={classes.new_title}>{item.title}</div>
        <div className={classes.new_discription}>{item.title_preview}</div>
        <NavLink to={`/news/${item.id}`} className={classes.new_link}>Read more</NavLink>
      </div>
    })

  }, [data])

  if (!user) return
  return (<>
    <div className={classes.wrapper}>
      <h2 className={classes.title}>Personal office</h2>
      <Slider
        pagination={true}
        slidesPerView={1}
        isShowNavigation={false}
      >
        <SwiperSlide>      <img src={fakeInst} /></SwiperSlide>
        <SwiperSlide>      <img src={fakeInst} /></SwiperSlide>
        <SwiperSlide>      <img src={fakeInst} /></SwiperSlide>
        <SwiperSlide>      <img src={fakeInst} /></SwiperSlide>
      </Slider>
      <p className={classes.sub_title}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      <h2 className={classes.title}>News</h2>
      {templateNews}
    </div>
  </>
  )
}

export default PersonalOfficeClient
