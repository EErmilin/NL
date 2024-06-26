import { useQuery } from "@tanstack/react-query";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import MainHero from "../../../components/MainHero/MainHero";
import ProductItem from "../../../components/ProductItem/ProductItem";
import ButtonDefault from "../../../components/UI/btns/Button/Button";
import Instagram from "./components/Instagram/Instagram";
import MainSlider from "./components/MainSlider/MainSlider";
import NewArrivalsSlider from "./components/NewArrivalsSlider/NewArrivalsSlider";
import NewsItem from "./components/NewsItem/NewsItem";
import NewsSlider from "./components/NewsSlider/NewsSlider";
import Spesial from "./components/Spesial/Spesial";
import classes from "./Main.module.scss";
import { Carousel } from 'antd';
import MainImg from '../../../assets/img/main.png';
import axiosCustom from "../../../axios/axiosCustom";


function Main() {

    const locale = useSelector(state => state.router.locale);

    const { data, isInitialLoading, isError } = useQuery([`slides`], () => {
        return axiosCustom(`https://testapi.eu-nl.com/api/v1/sliders?sort=id`)
    }
    );

    const templateNew = useMemo(() => {
        return <div >
            <span className={classes.items_title}>New arrivals</span>
            <NewArrivalsSlider />
        </div>
    }, [])

    const templateSpesial = useMemo(() => {
        return <div>
            <span className={classes.items_title}>Special offers</span>
            <Spesial />
        </div>
    }, [])
    const templateNews = useMemo(() => {
        return <div>
            <span className={classes.items_title}>News</span>
            <NewsSlider />
        </div>
    }, [])
    const templateInstagram = useMemo(() => {
        return <div className={classes.instagram}>
            <div className={classes.instagram_title}>Follow instagram</div>
            <Instagram />

        </div>
    }, [])


    const slides = data?.data?.data
    return (
        <div>
            <div className={classes.hero}>
                {slides && <Carousel autoplay dots={false} speed={1500} autoplaySpeed={5000}>
                    {slides.map((slide) => <img src={slide.image_url}  className={classes.slide}/>)}
                </Carousel>}
                {/*   <MainHero>

                   <div className={classes.hero_wrp}>
                        <div className={classes.hero_top}>New flavour</div>
                        <h1 className={classes.hero_title}>Smart Go</h1>
                        <div className={classes.hero_text}>Chocolate and Peanut</div>
                        <ButtonDefault title={"More"} className={classes.hero_btn} />
                        </div>
                    {// <MainSlider />
                    }
                </MainHero>*/}
            </div>
            <div className={classes.wrap}>
                {templateNew}
                {templateSpesial}
                {templateNews}
                {templateInstagram}
            </div>
        </div>
    )
}

export default Main