import React, { useEffect, useState } from 'react'
import classes from "./ImagesSlider.module.scss";
import { SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./swiper.scss";
import CustomSlider from "../../../../../components/CustomSlider/CustomSlider";

function ImagesSlider({ photos
}) {

    const [swiper, setSwiper] = useState()
    const prevRef = React.useRef();
    const nextRef = React.useRef();


    const slides = photos && photos.map((photo) => {
        return <SwiperSlide>
            {photo}
        </SwiperSlide>

    })
    slides.shift()

    useEffect(() => {
        if (swiper && swiper.params) {
            console.log(`Swiper instance: `, swiper)
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
        }
    }, [swiper])

    return (
        <div className={classes.swiper}>
            <div className={classes.swiper_button_top} ref={prevRef}>
            </div>
            <CustomSlider
                direction="vertical"
                className={classes.swiper}
                slidesPerView={4}
                spaceBetween={20}
                onSwiper={setSwiper}
                navigation={{
                    prevEl: prevRef?.current,
                    nextEl: nextRef?.current
                }}
            >
                {slides}
            </CustomSlider>

            <div className={classes.swiper_button_bottom} ref={nextRef} >
            </div>

        </div>
    );
}

export default ImagesSlider