import React from 'react'
import classes from "./MainSlider.module.scss";
import { SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./swiper.scss";
import CustomSlider from "../../../../../components/CustomSlider/CustomSlider";

function MainSlider({
}) {
    return (
        <div className={classes.swiper}>
            <CustomSlider>
                <SwiperSlide>
                    <div className={classes.swiper_slide}>
                        <div className={classes.swiper_text}>
                            Eternal beauty begins with
                        </div>
                        <h1 className={classes.swiper_title}>LORIMER</h1>
                        <div className={classes.swiper_text}>Introducing our new anti-aging line</div>
                        <button className={classes.swiper_btn}>More</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={classes.swiper_slide}>
                        <div className={classes.swiper_text}>
                            Eternal beauty begins with
                        </div>
                        <h1 className={classes.swiper_title}>LORIMER</h1>
                        <div className={classes.swiper_text}>Introducing our new anti-aging line</div>
                        <button className={classes.swiper_btn}>More</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={classes.swiper_slide}>
                        <div className={classes.swiper_text}>
                            Eternal beauty begins with
                        </div>
                        <h1 className={classes.swiper_title}>LORIMER</h1>
                        <div className={classes.swiper_text}>Introducing our new anti-aging line</div>
                        <button className={classes.swiper_btn}>More</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={classes.swiper_slide}>
                        <div className={classes.swiper_text}>
                            Eternal beauty begins with
                        </div>
                        <h1 className={classes.swiper_title}>LORIMER</h1>
                        <div className={classes.swiper_text}>Introducing our new anti-aging line</div>
                        <button className={classes.swiper_btn}>More</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={classes.swiper_slide}>
                        <div className={classes.swiper_text}>
                            Eternal beauty begins with
                        </div>
                        <h1 className={classes.swiper_title}>LORIMER</h1>
                        <div className={classes.swiper_text}>Introducing our new anti-aging line</div>
                        <button className={classes.swiper_btn}>More</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={classes.swiper_slide}>
                        <div className={classes.swiper_text}>
                            Eternal beauty begins with
                        </div>
                        <h1 className={classes.swiper_title}>LORIMER</h1>
                        <div className={classes.swiper_text}>Introducing our new anti-aging line</div>
                        <button className={classes.swiper_btn}>More</button>
                    </div>
                </SwiperSlide>
            </CustomSlider>
        </div>
    );
}

export default MainSlider