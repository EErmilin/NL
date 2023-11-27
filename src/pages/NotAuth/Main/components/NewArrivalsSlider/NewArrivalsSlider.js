import React, { useMemo } from 'react'
import classes from "./NewArrivalsSlider.module.scss";
import { SwiperSlide } from "swiper/react";
import CustomSlider from "../../../../../components/CustomSlider/CustomSlider";
import NewsItem from '../NewsItem/NewsItem';
import useWindowSize from '../../../../../hooks/useWindowSize';
import ProductItem from '../../../../../components/ProductItem/ProductItem';
import { useQuery } from '@tanstack/react-query';
import axiosCustom from '../../../../../axios/axiosCustom';
import { useSelector } from 'react-redux';
const backUrl = "https://testapi.eu-nl.com"

function NewArrivalsSlider({
}) {
    const locale = useSelector(state => state.router.locale);
    const { data, isInitialLoading, isError } = useQuery(["New",{locale}], () =>
        axiosCustom(`${backUrl}/api/v1/products?sort=id&category_id=${19}`)
    );


    const templateProducts = useMemo(() => {
        if (!data) return
        return data.data?.data?.map((product, key) => <SwiperSlide key={key}><ProductItem product={product} /></SwiperSlide>)
    }, [data])

    const windowSize = useWindowSize()
    return (
        <div className={classes.swiper}>
            <CustomSlider
                slidesPerView={windowSize.width < 768 ? 2 : 4}>
                {templateProducts}
            </CustomSlider>
        </div>
    );
}

export default NewArrivalsSlider