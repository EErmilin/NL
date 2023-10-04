
import classes from "./Button.module.scss";
import { Button } from 'antd';
import React from 'react'


function ButtonDefault({ title, disabled, className, onClick }) {
    const cls = [disabled ? classes.btn_disabled : classes.btn]
    if (className) cls.push(className)
    return (
        <Button type="primary" onClick={onClick} className={cls.join(" ")}>
            {title}
        </Button>
    )
}

export default ButtonDefault