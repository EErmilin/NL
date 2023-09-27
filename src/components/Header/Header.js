import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.scss"
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
function Header() {

    return (
        <header className={classes.wrap}>
            <div className={classes.top}>
                <div className={classes.top_wrp}>
                    <div className={classes.top_lang_wrp}>
                        <NavLink to="" className={classes.top_lang}>Latvia | EN</NavLink>
                        <NavLink to="">Personal office</NavLink>
                    </div>
                    <div>
                        <NavLink to="" className={classes.top_profile}>Log in</NavLink>
                        {` | `}
                        <NavLink to="" className={classes.top_auth}>Sign up</NavLink>
                    </div>

                </div>
            </div>
            <div className={classes.container}>
                <div className={classes.container_left}>
                    <NavLink to="">Products</NavLink>
                    <NavLink to="">Our story</NavLink>
                    <NavLink to="">Business</NavLink>
                    <NavLink to="">News</NavLink>
                    <NavLink to="">Contacts</NavLink>
                </div>
                <div className={classes.logo}>
                    <Logo />
                </div>
                <div className={classes.container_right}>
                    <NavLink className={classes.search} to="">Search</NavLink>
                    <div>
                        <NavLink to="" className={classes.heart}>Wishlist</NavLink>
                        <NavLink to="" className={classes.cart}>My cart</NavLink>
                    </div>
                </div>
            </div>
        </header >
    )
}

export default Header