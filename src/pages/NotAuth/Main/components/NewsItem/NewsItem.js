import React from 'react'
import classes from "./NewsItem.module.scss";
import { NavLink } from 'react-router-dom';
import fakeNew from '../../../../../assets/img/fakeNew.png';

function NewsItem({
}) {
    return (
        <div className={classes.new}>
            <img src={fakeNew}/>
            <div className={classes.new_date}>October 8, 2023</div>
            <h3 className={classes.new_title}>Don't miss the chance to purchase our products at competitive prices!</h3>
            <p className={classes.new_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  faucibus augue, a maximus elit ex vitae libero... </p>

            <NavLink to="" className={classes.new_link}>Read more</NavLink>

        </div>
    );
}

export default NewsItem