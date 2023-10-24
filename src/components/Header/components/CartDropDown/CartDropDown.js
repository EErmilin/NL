import React, { useState } from "react"
import classes from "./CartDropDown.module.scss";
import fakeBrand from '../../../../assets/img/fakeProduct.png';
import ButtonDefault from "../../../UI/btns/Button/Button";
import { useNavigate } from "react-router-dom";

function Product({

}) {
    const [count, setCount] = useState(1)

    return (
        <div className={classes.cart_product}>
            <img src={fakeBrand} className={classes.cart_product_img}></img>
            <div className={classes.cart_product_info}>
                <div className={classes.cart_product_info_name}>Smart Go Сhocolate</div>
                <div className={classes.cart_product_info_price}>15 €</div>
                <div className={classes.cart_product_counter}>
                    <div className={classes.cart_product_counter_btn} onClick={() => count > 1 && setCount(count - 1)}></div>
                    {count}
                    <div className={classes.cart_product_counter_btn_plus} onClick={() => setCount(count + 1)}></div></div>
            </div>
            <div className={classes.cart_product_delete}></div>
        </div>
    )
}

function CartDropDown({

}) {
    const navigate = useNavigate()
    return (
        <div className={classes.cart}>
            <div className={classes.cart_products_wrp}>
                <h2 className={classes.cart_title}>Shopping bag</h2>
                <div className={classes.cart_count}>4 items</div>
                <Product />
                <Product />
                <Product />
            </div>
            <div className={classes.cart_bottom}>
                <div className={classes.cart_bottom_total}>
                    <span>Subtotal (4 items)</span>
                    <span>60 €</span>
                </div>
                <ButtonDefault title={'View cart'} onClick={()=>navigate("/cart")}></ButtonDefault>

            </div>
        </div>
    )
}

export default CartDropDown