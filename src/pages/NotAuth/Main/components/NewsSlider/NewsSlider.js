import React, { useMemo } from 'react'
import classes from "./NewsSlider.module.scss";
import { SwiperSlide } from "swiper/react";
import CustomSlider from "../../../../../components/CustomSlider/CustomSlider";
import NewsItem from '../NewsItem/NewsItem';
import useWindowSize from '../../../../../hooks/useWindowSize';
import { useSelector } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import axiosCustom from '../../../../../axios/axiosCustom';

function NewsSlider({
}) {

    const locale = useSelector(state => state.router.locale);

    const { data, isInitialLoading, isError } = useQuery(["News", { locale: locale }], () =>
        axiosCustom.get("https://testapi.eu-nl.com/api/v1/articles")
    );



    const templateProducts = useMemo(() => {
        if (!data) return
        return data.data?.data?.map((item, key) => <SwiperSlide key={key}><NewsItem item={item} /></SwiperSlide>)
    }, [data])

    const windowSize = useWindowSize()
    return (
        <div className={classes.swiper}>
            <CustomSlider
                slidesPerView={windowSize.width < 768 ? 2 : 3}>
                {templateProducts}
            </CustomSlider>
        </div>
    );
}

export default NewsSlider