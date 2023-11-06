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
import classNames from "classnames";
import { useQuery } from '@tanstack/react-query';
import fakeBrand from '../../assets/img/fakeBrand.png';
import axiosCustom from '../../axios/axiosCustom';


//TODO Отрефачить стили с код

export default function MobileMenu({ menuOpened, setMenuOpened, setLocalesModal, navigationMenuVisibleState, setNavigationMenuVisibleState }) {

    const locale = useSelector(state => state.router.locale);
    const user = useSelector(state => state.auth.user);
    const url = useLocation()
    const dispatcher = useDispatch()
    const navigate = useNavigate()
    const { t } = useTranslation()
    const windowSize = useWindowSize()
    const [categorie, setCategorie] = useState(null)
    const [categorieId, setCategorieId] = useState(null)




    const categories = useSelector(state => state.catalog.categories);

    const { data, isInitialLoading, isError } = useQuery([`categorie${categorieId}`, { categorieId: categorieId }], () =>
        axiosCustom(`${backUrl}/api/v1/descendant-categories?parent_id=${categorieId}`, { id: categorieId })
    );



    /** Масив ссылок */
    const templateLinksProducts = useMemo(() => {
        return categories?.map((elem, id) => {
            if (elem.slug === "root") {
                return

            }

            if (elem.slug === "new-arrivals") {
                return <div className={classes.products_categorie_link} > <NavLink to={`/products/${elem.id}`} className={classes.products_categorie_link}>{elem.name}</NavLink></div>

            }
            if (elem.slug === "special-offers") {
                return <div className={classes.products_categorie_link}> <NavLink to={`/products/${elem.id}`} className={classes.products_categorie_link}>{elem.name}</NavLink></div>

            }
            if (elem.slug === "bestsellers") {
                return <div className={classes.products_categorie_link}> <NavLink to={`/products/${elem.id}`} className={classes.products_categorie_link}>{elem.name}</NavLink></div>

            }
            return (
                <div
                    className={classes.products_categorie}
                    key={id}
                    onMouseEnter={() => { setCategorieId(elem.id); setCategorie(true) }}
                    onClick={() => navigate(`/products/${elem.id}`)}
                >
                    {elem.name}
                </div>
            )
        })
    }, [categories, locale])


    /** Масив ссылок */
    const templateBrands = useMemo(() => {
        let arrLinks = []
        arrLinks = [
            { link: "/products/1", title: t("Smart Go") },
            { link: "/products/1", title: t("Greenflash") },
            { link: "/products/1", title: t("Lorimer") },
            { link: "/products/1", title: t("Occuba") },
            { link: "/products/1", title: t("TenX") },
            { link: "/products/1", title: t("Fineffect") },
            { link: "/products/1", title: t("and others") },
        ]
        return arrLinks.map((elem, id) => {
            return (

                <div className={classes.brand}>
                    <NavLink

                        key={id}
                        to={elem.link}
                    >
                        {elem.title}
                    </NavLink>
                </div>
            )
        })
    }, [])

    const templateCategorie = data?.data?.data?.map((item, key) => {
        return <div key={key} className={categorie ? classes.categorie_current : classes.categorie_current} onClick={() => navigate(`/products/${item.id}`)}>{item.name}</div>
    })


    /** Масив ссылок */
    const templateLinks = useMemo(() => {
        let arrLinks = []
        arrLinks = [
            //  { link: "/tape", title: "Лента" },
            { link: "/products", title: t("Products") },
            { link: "/OurStory", title: t("Our story") },
            { link: "/Business", title: t("Business") },
            { link: "/", title: t("News") },
            { link: "/Contacts", title: t("Contacts") },
        ]

        return arrLinks.map((elem, id) => {
            if (elem.link === '/products') {
                return <div className={classes.link} onClick={() => {

                    setNavigationMenuVisibleState(!navigationMenuVisibleState);
                }} key={id}>
                    {elem.title}
                </div>

            }
            return (
                <NavLink to={elem.link} className={classes.link} onClick={() => setMenuOpened(false)} key={id}>
                    {elem.title}
                </NavLink>
            )

        })
    }, [url, locale, navigationMenuVisibleState])

    useEffect(() => {
        if (menuOpened) {
            document.body.classList.add('body-hidden');
        } else {
            document.body.classList.remove('body-hidden');
        }
        return () => {
            document.body.classList.remove('body-hidden');
        };
    }, [menuOpened]);


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

    useEffect(() => {
        setMenuOpened(false)
    },
        [url.pathname])

    useEffect(() => {
        if (windowSize.width > 1023 && menuOpened) {
            setMenuOpened(false)
        }

    }, [windowSize.width])


    console.log(navigationMenuVisibleState)


    return (
        <div className={classes.wrp}>
            <div
                className={classNames("navigation-menu", {
                    visible: menuOpened
                })}
            >
                <div className={classes.lang_wrp}>
                    {locale && <div onClick={() => { setLocalesModal(true); setMenuOpened(false) }} className={classes.lang}>United Kingdom  {locale.code.toUpperCase()}</div>}
                    <div className={classes.btn} onClick={toProfile}>{t("Personal office")}</div>
                </div>

                <div className={classes.container}>
                    <div className={classes.links_wrp}>
                        {templateLinks}
                    </div>
                    <div className={classes.bottom}>
                        {user ? <div className={[classes.bottom_profile_user, classes.bottom_profile].join(" ")}>{user.name}<span className={classes.ref}>{user.referral_code}</span> <div className={classes.bottom_auth} onClick={exit}>{t("Log out")}</div></div> :
                            <div className={classes.bottom_profile} onClick={() => { dispatcher(setIsAuth()); setMenuOpened(false) }}>{t("Log in")}    <NavLink to="/registration" className={classes.bottom_auth}>{t("Sign up")}</NavLink></div>}
                    </div>
                </div>
            </div>
            <div
                className={classNames("navigation-menu", {
                    visible: navigationMenuVisibleState
                })}
            >
                <div className={classes.products_title} onClick={() => setNavigationMenuVisibleState(false)}>Products</div>
                <div className={classes.products_sub_title}>Categories</div>
                {templateLinksProducts}
                <div className={classes.products_sub_title}>Brands</div>

                <div className={classes.products_brands_wrp}>
                    <div className={classes.products_brands}>
                        {templateBrands}
                    </div>
                    <div>  <img className={classes.products_img} src={fakeBrand} /></div>
                    <div className={classes.bottom}>
                        {user ? <div className={[classes.bottom_profile_user, classes.bottom_profile].join(" ")}>{user.name}<span className={classes.ref}>{user.referral_code}</span> <div className={classes.bottom_auth} onClick={exit}>{t("Log out")}</div></div> :
                            <div className={classes.bottom_profile} onClick={() => { dispatcher(setIsAuth()); setMenuOpened(false) }}>{t("Log in")}    <NavLink to="/registration" className={classes.bottom_auth}>{t("Sign up")}</NavLink></div>}
                    </div>
                </div>
            </div>
        </div>
    )
}