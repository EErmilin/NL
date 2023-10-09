import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import classes from "./Header.module.scss"
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import { useDispatch } from "react-redux";
import { setIsAuth } from "../../store/actions/routerActions";

function Header() {

    const dispatcher = useDispatch()
    const navigate = useNavigate()

    const toProfile = () =>{
        if(!localStorage.getItem('token') || localStorage.getItem('token')==='undefined'){
            dispatcher(setIsAuth(true))
        }
        else{
            navigate("/personal-area")
        }
      
    }

    return (
        <header className={classes.wrap}>
            <div className={classes.top}>
                <div className={classes.top_wrp}>
                    <div className={classes.top_lang_wrp}>
                        <NavLink to="" className={classes.top_lang}>Latvia | EN</NavLink>
                        <div className={classes.btn}onClick={toProfile}>Personal office</div>
                    </div>
                    <div>
                        <div className={classes.top_profile}  onClick={()=>dispatcher(setIsAuth())}>Log in</div>
                        {` | `}
                        <NavLink to="/registration" className={classes.top_auth}>Sign up</NavLink>
                    </div>

                </div>
            </div>
            <div className={classes.container}>
                <div className={classes.container_left}>
                    <NavLink to="">Products</NavLink>
                    <NavLink to="/OurStory">Our story</NavLink>
                    <NavLink to="/Business">Business</NavLink>
                    <NavLink to="">News</NavLink>
                    <NavLink to="/Contacts">Contacts</NavLink>
                </div>
                <div className={classes.logo}>
                <NavLink to="/"><Logo /></NavLink>
                </div>
                <div className={classes.container_right}>
                    <NavLink className={classes.search} to="">Search</NavLink>
                    <div>
                        <NavLink to="" className={classes.heart}>Wishlist</NavLink>
                        <div className={classes.cart}>My cart</div>
                    </div>
                </div>
            </div>
        </header >
    )
}

export default Header