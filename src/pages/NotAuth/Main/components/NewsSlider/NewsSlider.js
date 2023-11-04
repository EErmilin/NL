import React from 'react'
import classes from "./NewsSlider.module.scss";
import { SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./swiper.scss";
import CustomSlider from "../../../../../components/CustomSlider/CustomSlider";
import NewsItem from '../NewsItem/NewsItem';
import useWindowSize from '../../../../../hooks/useWindowSize';

function NewsSlider({
}) {

    const windowSize = useWindowSize()
    return (
        <div className={classes.swiper}>
            <CustomSlider
                slidesPerView={windowSize.width < 768? 2: 3}>
                <SwiperSlide>
                    <NewsItem />
                </SwiperSlide>
                <SwiperSlide>
                    <NewsItem />
                </SwiperSlide>
                <SwiperSlide>
                    <NewsItem />
                </SwiperSlide>
                <SwiperSlide>
                    <NewsItem />
                </SwiperSlide>
                <SwiperSlide>
                    <NewsItem />
                </SwiperSlide>
                <SwiperSlide>
                    <NewsItem />
                </SwiperSlide>
                <SwiperSlide>
                    <NewsItem />
                </SwiperSlide>
                <SwiperSlide>
                    <NewsItem />
                </SwiperSlide>
                <SwiperSlide>
                    <NewsItem />
                </SwiperSlide>
            </CustomSlider>
        </div>
    );
}

export default NewsSlider