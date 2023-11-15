import ModalWithBackground from '../ModalWithBackground/ModalWithBackground';
import classes from './ChangeProductModal.module.scss';
import React, { useEffect } from 'react';
import ProductItem from '../../ProductItem/ProductItem';
import ButtonDefault from '../../UI/btns/Button/Button';
import { useState } from 'react';

const ChangeProductModal = ({ closeModal, btnCancelClick, productsArray, selectProduct, setProductId, selectegPackItems }) => {

    const [selectedProduct, setSelectedProduct] = useState()
    const [selectedProductId, setSelectedProductId] = useState()


    const onChange = () => {
        setProductId(selectedProductId)
        selectProduct(selectedProduct)
        btnCancelClick()
    }

    const templateProducts = productsArray.map((product) => {
        return <div onClick={() => { setSelectedProduct(product[1]); setSelectedProductId([Number(product[0])]) }}
            className={selectedProduct === product[1] ? classes.selected_wrp : classes.no_selected_wrp}>
            <ProductItem
                product={product[1]}
                isChangeModal={true}
                classNameImage={selectedProduct === product[1] ? classes.selected : classes.no_selected} />
        </div>
    })

    return (
        <ModalWithBackground
            closeModal={closeModal}
            btnCancelClick={btnCancelClick}
            width={1080}
            className={classes.modal}
        >
            <div className={classes.title}>Make your choice</div>
            <div className={classes.wrp}>
                {templateProducts}
            </div>
            <ButtonDefault title={'Choose'} className={classes.btn} onClick={() => onChange(selectedProduct)} />

        </ModalWithBackground>

    );
};

export default ChangeProductModal;

