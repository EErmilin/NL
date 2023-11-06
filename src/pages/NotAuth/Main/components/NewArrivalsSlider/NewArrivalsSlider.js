import React from 'react'
import classes from "./NewArrivalsSlider.module.scss";
import { SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./swiper.scss";
import CustomSlider from "../../../../../components/CustomSlider/CustomSlider";
import NewsItem from '../NewsItem/NewsItem';
import useWindowSize from '../../../../../hooks/useWindowSize';
import ProductItem from '../../../../../components/ProductItem/ProductItem';

function NewArrivalsSlider({
}) {

    const windowSize = useWindowSize()
    return (
        <div className={classes.swiper}>
            <CustomSlider
                slidesPerView={windowSize.width < 768? 2: 4}>
                <SwiperSlide>
                    <ProductItem />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductItem />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductItem />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductItem />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductItem />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductItem />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductItem />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductItem />
                </SwiperSlide>
                <SwiperSlide>
                    <ProductItem />
                </SwiperSlide>
            </CustomSlider>
        </div>
    );
}

export default NewArrivalsSlider