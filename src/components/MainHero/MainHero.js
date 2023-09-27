import React, {useMemo, useState} from 'react'
import classes from './MainHero.module.scss'
import Main from '../../assets/img/main.png';


export default function MainHero({children}) {


    return(
        <div className={classes.wrap}>
            <div className={classes.background}>
                <img src={Main}/>
            </div>
            <div className={classes.filter}>
                {children}
            </div>
        </div>
    )
}