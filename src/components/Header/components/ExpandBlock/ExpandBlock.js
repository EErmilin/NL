import React from "react"
import ProductsMenu from "../ProductsMenu/ProductsMenu";
import classes from "./ExpandBlock.module.scss";


function ExpandBlock({
    className,
    RoomsWrpRef
}) {
    const cls = [classes.block_wrp]
    if (className) cls.push(className)

    return (
            <div className={classes.block} ref={RoomsWrpRef}>
                <ProductsMenu />
            </div>
    )
}

export default ExpandBlock