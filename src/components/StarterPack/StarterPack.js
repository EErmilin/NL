import { message } from "antd";
import React, { useEffect, useMemo, useRef, useState } from "react"
import { useDispatch } from "react-redux";
import { addStarterPack } from "../../store/actions/orderActions";
import { setIsShowCart } from "../../store/actions/routerActions";
import ProductItem from "../ProductItem/ProductItem";
import ButtonDefault from "../UI/btns/Button/Button";
import classes from "./StarterPack.module.scss";

function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}


function Cell({ cell, setSelectegPackItems, selectegPackItems, setCellsObj, cellsObj }) {
    const productsArray = Object.entries((cell[1]))
    const [selected, setSelected] = useState(productsArray[0][1])
    const prevState = usePrevious({ selected });
    const parrentId = cell[0]
    const [productId, setProductId] = useState([Number(productsArray[0][0])])

    useEffect(() => {
        let obj = { ...cellsObj, [parrentId]: productId };
        const array = [...selectegPackItems]

        if (prevState?.selected !== selected) {
            array.splice(array.indexOf(prevState?.selected), 1);
        }
        if (!array.includes(selected)) {
            array.push(selected)
            setCellsObj(obj)
            return setSelectegPackItems(array)
        }
    }, [selected, selectegPackItems, cell])

    return <ProductItem product={selected} isChange={true} productsArray={productsArray} selectProduct={setSelected} setProductId={setProductId} selectegPackItems={selectegPackItems} />
}


export default function StarterPack({ pack }) {
    const [messageApi, contextHolder] = message.useMessage();
    const [cellsObj, setCellsObj] = useState(null)
    const [selectegPackItems, setSelectegPackItems] = useState([])
    const dispatcher = useDispatch()

    const createCells = useMemo(() => {
        if (!pack.bundle_options) return
        const array = Object.entries(pack.bundle_options)
        return array.map((cell) => {
            return <Cell cell={cell} setSelectegPackItems={setSelectegPackItems} selectegPackItems={selectegPackItems} setCellsObj={setCellsObj} cellsObj={cellsObj} />
        })
    }, [pack, selectegPackItems])

    const templateInfo = selectegPackItems.map((item) => <div className={classes.info_content_item}>{item?.name}</div>)


    const onSubmit = async () => {

        let bundle_option_qty = {};
        Object.keys(cellsObj).forEach(key => {
            bundle_option_qty[key.toString()] = 1
        });

        const obj = {
            "product_id": pack.id,
            "quantity": "1",
            "bundle_options": cellsObj,
            "bundle_option_qty": bundle_option_qty,
        }
        try {
            const response = await dispatcher(addStarterPack(obj))
            if (response.data) {
                document.body.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
                await dispatcher(setIsShowCart(true))
            }


        } catch (error) {
            messageApi.open({
                type: 'error',
                content: error.message,
            });
        }

    }

    return (
        <div className={classes.starter}>
            <div className={classes.title}>{pack.name}</div>
            <div className={classes.wrp}>
                <div className={classes.wrp_products}>{createCells.map((item) => item)}</div>

                <div className={classes.info}>
                    <div className={classes.info_wrp}>
                        <div className={classes.info_title}>List of products</div>
                        <div className={classes.info_content}>{templateInfo}</div>
                    </div>
                    <div className={classes.info_wrp}>
                        <div className={classes.info_price}>{pack.price} €</div>
                        <ButtonDefault title={'Add to cart'} className={classes.info_btn} onClick={() => onSubmit()}></ButtonDefault>
                    </div>
                </div>

            </div>
            {contextHolder}
        </div>
    )
}
