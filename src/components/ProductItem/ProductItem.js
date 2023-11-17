import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import fakeProduct from '../../assets/img/fakeProduct.png'
import { formatedSum, isUserAuth } from "../../functions/functions";
import useToggleVisibility from "../../hooks/useToggleVisibility";
import { addProduct } from "../../store/actions/orderActions";
import { setIsAuth, setIsShowCart } from "../../store/actions/routerActions";
import Counter from "../Counter/Counter";
import ChangeProductModal from "../modals/ChangeProductModal/ChangeProductModal";
import classes from "./ProductItem.module.scss";


function ProductItem({ product, isChange = false, productsArray, isChangeModal, selectProduct, classNameImage, setProductId, selectegPackItems }) {

    const dispatcher = useDispatch()
    const navigate = useNavigate()
    const isShowCart = useSelector(state => state.router.isShowCart);
    const cart = useSelector(state => state.order.cart)
    const [isCount, setIsCount] = useState(false)
    const [cartProduct, setСartProduct] = useState(false)
    const [changeModal, setChangeModal, closeChangeModal] = useToggleVisibility()

    const clsImg = [classes.product_img]

    if (classNameImage) {
        clsImg.push(classNameImage)
    }


    useEffect(() => {
        const cartProduct = cart?.items?.find((item) => item.product.id == product.id)
        setСartProduct(cartProduct)
        if (!cartProduct) setIsCount(false)
    }, [cart?.items])


    const toggleAddProduct = async () => {
        if (!isUserAuth()) {
            dispatcher(setIsAuth(true))
        } else {
            setIsCount(true)
            !cartProduct && dispatcher(addProduct(product.id))
            !isShowCart && dispatcher(setIsShowCart(true))
        }
    }

    const temblateBtn = useMemo(() => {
        if (isChangeModal) return null
        if (isCount || cartProduct) {
            return <Counter item={cartProduct} className={classes.counter} />
        }
        if (isChange) {
            return <div className={classes.change} onClick={() => setChangeModal(true)}></div>
        }

        return <div className={classes.cart} onClick={toggleAddProduct}></div>
    }, [isChangeModal, isCount, cartProduct])


    const templateModalChange = changeModal &&
        <ChangeProductModal
            selectegPackItems={selectegPackItems}
            setProductId={setProductId}
            selectProduct={selectProduct}
            productsArray={productsArray}
            closeModal={closeChangeModal}
            btnCancelClick={() => setChangeModal(false)} />

    const onToggleProduct = () => {
        if (isChangeModal) {
            return
        }
        return navigate(`/product/${product.id}`)
    }


    if (product) {
        return <div className={classes.wrap}>
            <div className={classes.product_img_wrp}>

                <img onClick={onToggleProduct} src={product.images && product.images[0].original_image_url} className={clsImg.join(" ")}></img>
                {temblateBtn}
            </div>
            <div onClick={onToggleProduct}>
                <p className={classes.product_title}>{product.type}</p>
                <p className={classes.product_description}>{product.name}</p>
                {!isChange && !isChangeModal && <p className={classes.product_price}>{formatedSum(product.price)}<sup className={classes.product_price_pv}>{product.pv ? "/" + Number(product.pv) + " PV" : null} </sup></p>}
                {!isChange && !isChangeModal && <div className={classes.status_wrp}>
                    {product.new ? <div className={classes.status}>New</div> : null}
                    {product.featured ? <div className={classes.gift}></div> : null}
                </div>}
            </div>
            {templateModalChange}
        </div>
    }
}

export default ProductItem