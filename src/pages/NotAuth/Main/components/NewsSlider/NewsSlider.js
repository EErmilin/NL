import React from 'react'
import classes from "./NewsSlider.module.scss";
import { SwiperSlide } from "swiper/react";
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