import React from "react";
import { NavLink } from "react-router-dom";
import fakeProduct from '../../assets/img/fakeProduct.png'
import classes from "./ProductItem.module.scss";


function ProductItem({ product }) {

    console.log('!!!!!!!')
    console.log(product)

    if (product) {
        return <NavLink to={`/product/${product.id}`} className={classes.wrap}>
            <img src={product.images[0].original_image_url} className={classes.product_img}></img>
            <p className={classes.product_title}>{product.type}</p>
            <p className={classes.product_description}>{product.name}</p>
            <p className={classes.product_price}>{Number(product.price).toFixed(0)} €<sup className={classes.product_price_pv}>/{Number(product.pv).toFixed(0)} PV</sup></p>
            {product.new && <div className={classes.status_wrp}><div className={classes.status}>New</div> {product.featured && <div className={classes.gift}></div>} </div>}
           
        </NavLink>
    }
    return (
        <NavLink to={``} className={classes.wrap}>
            <img src={fakeProduct}></img>
            <p className={classes.product_title}>Shampoo</p>
            <p className={classes.product_description}>For sun damaged hair</p>
            <p className={classes.product_price}>15 €</p>
        </NavLink>
    )
}

export default ProductItem