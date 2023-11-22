import React, { useEffect, useMemo, useState } from "react"
import classes from "./Counter.module.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteCartItem, updateCard } from "../../store/actions/orderActions";

export default function Counter({ item, className }) {
    const [count, setCount] = useState(Number(item?.quantity ?? 1))
    const dispatcher = useDispatch()
    const cls = [classes.counter]
    const cart = useSelector(state => state.order.cart)
    
    if(className){
        cls.push(className)
    }

    const handleClick =  (type) =>{
        if(type==="add"){
             dispatcher(updateCard(item.id, count + 1))
            setCount(count + 1)
        } else{
             if(count > 1){
                setCount(count - 1)
                dispatcher(updateCard(item.id, count - 1))
               setCount(count - 1)
             } else{
                dispatcher(deleteCartItem(item.id))}
             }
      }

    const templateProduct = useMemo(() => {
        return (<div className={cls.join(" ")}>
            <div className={classes.counter_btn} onClick={handleClick}></div>
            {item?.quantity ? item?.quantity: 1}
            <div className={classes.counter_btn_plus} onClick={()=>handleClick("add")}></div>
        </div>

        )
    }, [item?.quantity, cart])


    return templateProduct
}
