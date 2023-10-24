import React, { useRef, useState } from "react"
import classes from "./ExpandBlock.module.scss"
import { useTranslation } from "react-i18next";


function ExpandBlock({
    title,
    className,
    children
}) {
    const { t } = useTranslation()
    const [isClick, setIsClick] = useState(false)
    const cls = [classes.block]
    if (className) cls.push(className)
    const RoomsWrpRef = useRef()

    function expandBlock() {
        if (!isClick) {
            const scrollHeight = RoomsWrpRef.current.scrollHeight
            RoomsWrpRef.current.style.height = `${scrollHeight}px`
            setIsClick(!isClick)
        } else {
            RoomsWrpRef.current.style.height = `0px`
            setIsClick(!isClick)
        }

    }
    return (
        <div className={classes.wrp}>
            <div className={isClick ? classes.block_header_open : classes.block_header} onClick={expandBlock}>
                {title}
            </div>
            <div className={cls.join(' ')} ref={RoomsWrpRef}>

                {children}
            </div>
        </div>
    )
}

export default ExpandBlock