import React, { useEffect, useMemo, useState } from "react"
import classes from "./CartDropDown.module.scss";
import fakeBrand from '../../../../assets/img/fakeProduct.png';
import ButtonDefault from "../../../UI/btns/Button/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartItem, updateCard } from "../../../../store/actions/orderActions";
import { SHOW_CARD } from "../../../../store/actions/actionsType";

function Product({ item }) {
    const [count, setCount] = useState(item.quantity)
    const dispatcher = useDispatch()

    useEffect(() => {
        if (count !== item.quantity) {
            dispatcher(updateCard(item.id, count))
        }
    }, [count])


    const templateProduct = useMemo(() => {
        return (
            <div className={classes.cart_product}>
                <img src={item.product.images[0].url} className={classes.cart_product_img}></img>
                <div className={classes.cart_product_info}>
                    <div className={classes.cart_product_info_name}>{item.product.name}</div>
                    <div className={classes.cart_product_info_price}>{item.product.formatted_price}</div>
                    <div className={classes.cart_product_counter}>
                        <div className={classes.cart_product_counter_btn} onClick={() => count > 1 && setCount(count - 1)}></div>
                        {item.quantity}
                        <div className={classes.cart_product_counter_btn_plus} onClick={() => setCount(count + 1)}></div></div>
                </div>
                <div className={classes.cart_product_delete} onClick={() => dispatcher(deleteCartItem(item.id))}></div>
            </div>
        )
    }, [item.quantity])


    return templateProduct
}

function CartDropDown({
}) {
    const cart = useSelector(state => state.order.cart)
    const navigate = useNavigate()
    const dispatcher = useDispatch()

    const templateProducts = useMemo(() => {
        if (!cart) return
        return cart.items.map((item, key) => {
            return <Product item={item} key={key} />
        })
    }, [cart])

    return (
        <div className={classes.cart}>
            <div className={classes.cart_products_wrp}>
                <h2 className={classes.cart_title}>Shopping bag</h2>
                <div className={classes.cart_count}>{cart?.items?.length ?? "0"} items</div>
                {cart ? templateProducts : <p>No products</p>}
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