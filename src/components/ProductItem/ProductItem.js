import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import fakeProduct from '../../assets/img/fakeProduct.png'
import { isUserAuth } from "../../functions/functions";
import { addProduct } from "../../store/actions/orderActions";
import { setIsAuth, setIsShowCart } from "../../store/actions/routerActions";
import Counter from "../Counter/Counter";
import classes from "./ProductItem.module.scss";


function ProductItem({ product }) {

    const dispatcher = useDispatch()
    const isShowCart = useSelector(state => state.router.isShowCart);
    const cart = useSelector(state => state.order.cart)
    const [isCount, setIsCount] = useState(false)
    const [cartProduct, setСartProduct] = useState(false)


    useEffect(()=>{
        const cartProduct = cart?.items?.find((item) => item.product.id == product.id)
        setСartProduct(cartProduct)
        if(!cartProduct)setIsCount(false)
    },[cart?.items])


    const toggleAddProduct = async () => {

        if (!isUserAuth()) {
            dispatcher(setIsAuth(true))
        } else {
            setIsCount(true)
            !cartProduct && dispatcher(addProduct(product.id))
            !isShowCart && dispatcher(setIsShowCart(true))
        }
    }




    if (product) {
        return <div className={classes.wrap}>
            <div className={classes.product_img_wrp}>
                <NavLink to={`/product/${product.id}`}>  <img src={product.images && product.images[0].original_image_url} className={classes.product_img}></img></NavLink>
                {isCount || cartProduct ? <Counter item={cartProduct} className={classes.counter} /> : <div className={classes.cart} onClick={toggleAddProduct}></div>}

            </div>
            <NavLink to={`/product/${product.id}`}>
                <p className={classes.product_title}>{product.type}</p>
                <p className={classes.product_description}>{product.name}</p>
                <p className={classes.product_price}>{Number(product.price).toFixed(0)} €<sup className={classes.product_price_pv}>{product.pv ? "/" + Number(product.pv).toFixed(0) + "PV" : null} </sup></p>
                <div className={classes.status_wrp}>
                    {product.new ? <div className={classes.status}>New</div> : null}
                    {product.featured ? <div className={classes.gift}></div> : null}
                </div>
            </NavLink>
        </div>
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