import React, { useEffect, useMemo, useState } from "react"
import classes from "./CartDropDown.module.scss";
import fakeBrand from '../../../../assets/img/fakeProduct.png';
import ButtonDefault from "../../../UI/btns/Button/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartItem, updateCard } from "../../../../store/actions/orderActions";
import { SHOW_CARD } from "../../../../store/actions/actionsType";
import Counter from "../../../Counter/Counter";

function Product({ item }) {
    const dispatcher = useDispatch()
    const navigate = useNavigate()
    const cart = useSelector(state => state.order.cart)


    const templateProduct = useMemo(() => {
        return (
            <div className={classes.cart_product}>
                <img src={item.product.images[0].url} className={classes.cart_product_img} onClick={() => navigate(`/product/${item.id}`)}></img>
                <div className={classes.cart_product_info}>
                    <div className={classes.cart_product_info_name} onClick={() => navigate(`/product/${item.id}`)}>{item.product.name}</div>
                    <div className={classes.cart_product_info_price}>{item.formatted_total}</div>
                    <Counter item={item} />
                </div>
                <div className={classes.cart_product_delete} onClick={() => dispatcher(deleteCartItem(item.id))}></div>
            </div>
        )
    }, [item.quantity, cart])

    return templateProduct
}

function Bundle({ item }) {
    const dispatcher = useDispatch()
    const navigate = useNavigate()
    const cart = useSelector(state => state.order.cart)

    const templateBundle = useMemo(() => {
        return (
            <div className={classes.cart_bundle}>
                <div className={classes.cart_product_info}>
                    <div className={classes.cart_bundle_info_name} onClick={() => navigate(`/products/31`)}>{item.product.name}</div>
                    <div className={classes.cart_product_info_price}>{item.formatted_total}</div>
                </div>
                <div className={classes.cart_bundle_delete} onClick={() => dispatcher(deleteCartItem(item.id))}></div>
            </div>
        )
    }, [item.quantity, cart])

    return templateBundle
}

function CartDropDown({
}) {
    const cart = useSelector(state => state.order.cart)
    const navigate = useNavigate()
    const dispatcher = useDispatch()

    const templateProducts = useMemo(() => {
        if (!cart) return
        return cart.items.map((item, key) => {
            if(item.type === "bundle"){
                return 
            }
            return <Product item={item} key={key} />
        })
    }, [cart, cart?.items])

    const templateBundle = useMemo(() => {
        if (!cart) return
        return cart.items.map((item, key) => {
            if(item.type === "bundle"){
                return <Bundle item={item} key={key}/>
            }
            return
        })
    }, [cart, cart?.items])

    return (
        <div className={classes.cart}>
            <div className={classes.cart_products_wrp}>
                <h2 className={classes.cart_title}>Shopping bag</h2>
                <div className={classes.cart_count}>{cart?.items?.length ?? "0"} items</div>
                {cart ? <>{templateBundle} {templateProducts}</> : <p>No products</p>}
            </div>
            <div className={classes.cart_bottom}>
                <div className={classes.cart_bottom_total}>
                    <span>Subtotal ({cart?.items?.length ?? "0"} items)</span>
                    <span>{cart?.formatted_sub_total ?? "0 €"} </span>
                </div>
                <ButtonDefault title={'View cart'} onClick={() => navigate("/cart")}></ButtonDefault>
            </div>
        </div>
    )
}

export default CartDropDown