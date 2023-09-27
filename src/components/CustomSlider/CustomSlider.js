import { FC, useMemo, useRef } from 'react';
import { Swiper } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import React from 'react'
import "./swiper.scss";

import SwiperCore, {
  Navigation,
  Pagination,
  EffectFade,
  EffectCoverflow,
  EffectCube,
} from "swiper";
import classes from "./CustomSlider.module.scss";

SwiperCore.use([
  EffectCoverflow,
  EffectCube,
  EffectFade,
  Navigation,
  Pagination,
]);

const Slider = ({ children }) => {

  /**Инстенс свипера*/
  const swiperRef = useRef();

  /**Стили*/
  const cls = [classes.swiper]
  return (
    <div className={classes.swiper}>
      <Swiper
        pagination={true}
        className={cls.join(' ')}
        slidesPerView={1}
        spaceBetween={20}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        navigation
      >
        {children}
      </Swiper>
    </div>
  );
};

export default Slider;