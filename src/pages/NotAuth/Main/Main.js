import React, { useMemo } from "react";
import MainHero from "../../../components/MainHero/MainHero";
import ProductItem from "../../../components/ProductItem/ProductItem";
import MainSlider from "./components/MainSlider/MainSlider";
import classes from "./Main.module.scss";


function Main() {

    const templateNew = useMemo(() => {
        return <div >
            <span className={classes.items_title}>New arrivals</span>
            <div className={classes.items}>
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </div>
        </div>
    }, {})

    const templateSpesial = useMemo(() => {
        return <div>
            <span className={classes.items_title}>Special offers</span>
            <div className={classes.items}>
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </div> </div>
    }, {})
    return (
        <div>
            <div className={classes.hero}>
                <MainHero><MainSlider /></MainHero>
            </div>
            <div className={classes.wrap}>

                    {templateNew}
    
                    {templateSpesial}
    
            </div>
        </div>
    )
}

export default Main