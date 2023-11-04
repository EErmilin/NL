import React, { useEffect, useMemo, useState } from 'react'
import classes from './MobileMenu.module.scss'
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Transition } from 'react-transition-group';
import './MobileMenu.scss'
import { useTranslation } from 'react-i18next';
import { clearUserData } from '../../store/actions/authActions';
import { setIsAuth } from '../../store/actions/routerActions';
import useWindowSize from '../../hooks/useWindowSize';

export default function MobileMenu({ menuOpened, setMenuOpened, setLocalesModal }) {

    const locale = useSelector(state => state.router.locale);
    const user = useSelector(state => state.auth.user);
    const url = useLocation()
    const dispatcher = useDispatch()
    const navigate = useNavigate()
    const { t } = useTranslation()
    const windowSize = useWindowSize()


    function clickHandler(e) {
        const targetClasses = e.target.className.split(" ");

        if (targetClasses.includes(classes.wrap) || targetClasses.includes(classes.close)) {
            setMenuOpened(false)
        }
    }


    /** Масив ссылок */
    const templateLinks = useMemo(() => {
        let arrLinks = []
        arrLinks = [
            //  { link: "/tape", title: "Лента" },
            { link: "/", title: t("Products") },
            { link: "/OurStory", title: t("Our story") },
            { link: "/Business", title: t("Business") },
            { link: "/", title: t("News") },
            { link: "/Contacts", title: t("Contacts") },
        ]

        return arrLinks.map((elem, id) => {
            return (

                <NavLink to={elem.link} className={classes.link} onClick={() => setMenuOpened(false)} key={id}>
                    {elem.title}
                </NavLink>
            )

        })
    }, [url, locale])


    const toProfile = () => {
        if (!localStorage.getItem('token') || localStorage.getItem('token') === 'undefined') {
            dispatcher(setIsAuth(true))
        }
        else {
            navigate("/personal-area")
        }
    }

    const exit = () => {
        setMenuOpened(false)
        dispatcher(clearUserData())
        localStorage.setItem('token', 'undefined')
        navigate("/")
    }

    useEffect(()=>{
        setMenuOpened(false)
    },
    [url.pathname])

    useEffect(()=>{
        if(windowSize.width> 1023 && menuOpened){
            setMenuOpened(false)
        }

    },[windowSize.width])



    return (
        <React.Fragment>
            <Transition in={menuOpened} timeout={300}>
                {(state) => {
                    console.log(state)
                    return (

                        <div
                            className={`menu menu--${state}`}
                            onClick={clickHandler}
                        >
                            <div className={classes.panel}>
                                <div className={classes.lang_wrp}>
                                    {locale && <div onClick={() => {setLocalesModal(true); setMenuOpened(false)}} className={classes.lang}>United Kingdom  {locale.code.toUpperCase()}</div>}
                                    <div className={classes.btn} onClick={toProfile}>{t("Personal office")}</div>
                                </div>
                                <div className={classes.container}>
                                    {templateLinks}
                                </div>
                            </div>
                            <div>
                            {user ? <div className={[classes.top_profile_user, classes.top_profile].join(" ")}>{user.name}<span className={classes.top_profile_user_ref}>{user.referral_code}</span> <div className={classes.top_auth} onClick={exit}>{t("Log out")}</div></div> :
                                <div className={classes.top_profile} onClick={() => {dispatcher(setIsAuth()); setMenuOpened(false)}}>{t("Log in")}    <NavLink to="/registration" className={classes.top_auth}>{t("Sign up")}</NavLink></div>}
                        </div>
                        </div>
                    )
                }

                }

            </Transition>
        </React.Fragment>
    )
}