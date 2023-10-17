import React from "react";
import { NavLink } from "react-router-dom";
import fakeProduct from '../../assets/img/fakeProduct.png'
import classes from "./ProductItem.module.scss";


function ProductItem() {

    return (
        <NavLink to={"/product"} className={classes.wrap}>
            <img src={fakeProduct}></img>
            <p className={classes.product_title}>Shampoo</p>
            <p className={classes.product_description}>For sun damaged hair</p>
            <p className={classes.product_price}>15 €</p>

        </NavLink>
    )
}

export default ProductItem