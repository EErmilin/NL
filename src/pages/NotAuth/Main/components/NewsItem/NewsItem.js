import React from 'react'
import classes from "./NewsItem.module.scss";
import { NavLink } from 'react-router-dom';
import fakeNew from '../../../../../assets/img/fakeNew.png';

function NewsItem({ item }) {

    console.log('!!!!!!!!!!')
    console.log(item)

    return (
        <div className={classes.new}>
            <div className={classes.img_wrp} >
                <img src={item.image_preview} className={classes.img} />
            </div>
            <div className={classes.new_date}>October 8, 2023</div>
            <h3 className={classes.new_title}>{item.title}</h3>
            <p className={classes.new_text}>{item.title_preview}</p>
            <NavLink to={`/news/${item.id}`} className={classes.new_link}>Read more</NavLink>
        </div>
    );
}

export default NewsItem