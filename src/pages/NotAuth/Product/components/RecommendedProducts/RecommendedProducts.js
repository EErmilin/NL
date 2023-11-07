import React, { useEffect } from 'react'
import classes from "./RecommendedProducts.module.scss";
import { SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./swiper.scss";
import CustomSlider from "../../../../../components/CustomSlider/CustomSlider";
import ProductItem from '../../../../../components/ProductItem/ProductItem';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../../../store/actions/catalogActions';

function RecommendedProducts({products}) {
    const dispatcer = useDispatch()

    const slides = products?.map((product, key) => {
        return <SwiperSlide>  <ProductItem key={key} product={product} />   </SwiperSlide>
    })

    return (
        <div className={classes.wrp}>
            <h2 className={classes.title}>Recommended products</h2>
            <div className={classes.swiper}>
                <CustomSlider
                    slidesPerView={3}>
                    {slides}
                </CustomSlider>
            </div>
        </div>
    );
}

export default RecommendedProducts