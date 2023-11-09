import { FC, useEffect, useMemo, useRef, useState } from 'react';
import { Swiper } from 'swiper/react';
import React from 'react'
import "./swiper.scss";
import 'swiper/swiper-bundle.css';
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import NavigationBtn from "../../components/UI/btns/NavigationBtn/NavigationBtn"

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

const Slider = ({ children, slidesPerView = "auto", direction = 'horizontal', spaceBetween = 10, ...rest }) => {

  /**Инстенс свипера*/
  const [swiper, setSwiper] = useState()

  /**Рефы на кнопки(вперед назад)*/
  const prevRef = useRef();
  const nextRef = useRef();

  /**Передача в инстенс свипера кнопок навигации*/
  useEffect(() => {
    if (swiper && swiper.params) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiper])

  /**Стили*/
  const cls = [classes.swiper]
  return (
    <div className={classes.swiper}>
      <Swiper
        pagination={true}
        className={cls.join(' ')}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        onSwiper={setSwiper}
        direction={direction}
        navigation={{
          prevEl: prevRef?.current,
          nextEl: nextRef?.current,
        }}
        {...rest}
      >
        {children}
      </Swiper>
      {direction === "horizontal" && <div className={classes.navigation}>
        <div className="swiper-button" ref={prevRef}>
          <NavigationBtn type="prev" />
        </div>
        <div className="swiper-button" ref={nextRef} >
          <NavigationBtn type="next" />
        </div>
      </div>}
    </div>
  );
};

export default Slider;