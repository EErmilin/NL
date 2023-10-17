import React from 'react'
import classes from "./Instagram.module.scss";
import fakeInst from '../../../../../assets/img/fakeInst.png';

function Instagram({
}) {
    return (
        <div className={classes.instagram}>
            <img src={fakeInst} />
            <img src={fakeInst} />
            <img src={fakeInst} />
            <img src={fakeInst} />
            <img src={fakeInst} />
            <img src={fakeInst} />
            <img src={fakeInst} />
            <img src={fakeInst} />
            <img src={fakeInst} />
            <img src={fakeInst} />
        </div>
    );
}

export default Instagram