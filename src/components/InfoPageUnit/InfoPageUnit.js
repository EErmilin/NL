import React from 'react'
import classes from './InfoPageUnit.module.scss'

export default function InfoPageUnit({title, children, className}) {
    const cls = [classes.wrapper]
    if(className)cls.push(className)
    return (
        <div className={cls.join(' ')}>
            <div className={classes.body}>
                <div className={classes.content}>
                    {children}
                </div>
            </div>
        </div>
    )
}