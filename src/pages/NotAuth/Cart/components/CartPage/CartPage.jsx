import React from "react"
import ButtonDefault from "../../../../../components/UI/btns/Button/Button";
import classes from "./CartPage.module.scss";
import { useNavigate } from "react-router-dom";
import CartProductItem from "../CartProductItem/CartProductItem";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "../../../../../store/actions/orderActions";
import { useMemo } from "react";
import CartBundleItem from "../CartBundleItem/CartBundleItem";


export const CartPage = () => {

  const navigate = useNavigate()
  const dispatcher = useDispatch()
  const cart = useSelector(state => state.order.cart)

  useEffect(() => {
    dispatcher(getCart())
  }, [])

  const templateProducts = useMemo(() => {
    return cart?.items.map((item) => {
      if (item.type === "bundle") {
        return
      }
      return <CartProductItem item={item} />
    })

  }, [cart])

  const templateBundle = useMemo(() => {
    return cart?.items.map((item) => {
      if (item.type === "bundle") {
        return <CartBundleItem item={item} />
      }
      return
    })

  }, [cart])

  const totalPV = cart && cart.items?.length && cart.items.reduce((partialSum, a) => partialSum + Number(a.product.pv)*a.quantity, 0);
console.log('@!@@@@@@@@@')
console.log(cart.items)
  return (
    <div className={classes.cart}>
      <div className={classes.cart_return}>Return to the catalog</div>
      <div className={classes.cart_title}>Shopping cart</div>
      <div className={classes.cart_wrp}>
        <div className={classes.cart_products}>
          <div className={classes.cart_products_title}><span>Products in the basket</span><span className={classes.cart_clear} onClick={() => dispatcher(clearCart())}>Clean cart</span> </div>
          {templateBundle}
          {templateProducts}
        </div>
        <div className={classes.cart_total}>
          <h2 className={classes.cart_total_title}>Cart totals</h2>
          <div className={classes.cart_total_products_wrp}><span className={classes.cart_total_products}>Products:</span> <span className={classes.cart_total_products}>{cart?.items_qty ? Number(cart?.items_qty).toFixed(0) : 0} items</span></div>
          <div className={classes.cart_total_price_wrp}>
            <span className={classes.cart_total_price_title}>Total:</span>
            <span className={classes.cart_total_price}>{cart?.formatted_grand_total || "0  €"}{totalPV ? <span className={classes.pv}> /{totalPV} PV</span> : ''}</span>
          </div>
          <ButtonDefault className={classes.cart_total_btn} onClick={() => navigate("/cart/order")} title={"Proceed to check out"}></ButtonDefault>
        </div>

      </div>
    </div>
  )
}

export default CartPage
