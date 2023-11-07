import React, { useEffect, useMemo, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import classes from "./Header.module.scss"
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import { useDispatch, useSelector } from "react-redux";
import { setIsAuth, setIsShowCart } from "../../store/actions/routerActions";
import useToggleVisibility from "../../hooks/useToggleVisibility";
import LocalesModal from "../modals/LocalesModal/LocalesModal";
import { useTranslation } from "react-i18next";
import { clearUserData } from "../../store/actions/authActions";
import ExpandBlock from "./components/ExpandBlock/ExpandBlock";
import CartDropDown from "./components/CartDropDown/CartDropDown";
import { isUserAuth } from "../../functions/functions";
import { SHOW_CARD } from "../../store/actions/actionsType";
import { useClickAway } from "@uidotdev/usehooks";
import MobileMenu from "../MobileMenu/MobileMenu";

function Header() {
    const [localesModal, setLocalesModal, closeLocalesModal] = useToggleVisibility(false)
    const user = useSelector(state => state.auth.user);
    const dispatcher = useDispatch()
    const navigate = useNavigate()
    const locale = useSelector(state => state.router.locale);
    const isShowCart = useSelector(state => state.router.isShowCart);
    const { t } = useTranslation()
    const url = useLocation()
    const [isProductsOpen, setIsProductsOpen] = useState(false)
    const RoomsWrpRef = useRef()
    const cart = useSelector(state => state.order.cart)
    const [menuOpened, setMenuOpened] = useState()
    const [navigationMenuVisibleState, setNavigationMenuVisibleState] = React.useState(false);

    const toProfile = () => {
        if (!localStorage.getItem('token') || localStorage.getItem('token') === 'undefined') {
            dispatcher(setIsAuth(true))
        }
        else {
            navigate("/personal-area")
        }
    }

    const exit = () => {
        dispatcher(clearUserData())
        localStorage.setItem('token', 'undefined')
        navigate("/")
    }


    const templateLocalesModal = localesModal && (
        <LocalesModal
            closeModal={closeLocalesModal}
            btnCancelClick={() => setLocalesModal(false)} />
    )

    /** Масив ссылок */
    const templateLinks = useMemo(() => {
        let arrLinks = []
        arrLinks = [
            { link: "/OurStory", title: t("Our story") },
            { link: "/Business", title: t("Business") },
            { link: "", title: t("News") },
            { link: "/Contacts", title: t("Contacts") },
        ]
        return arrLinks.map((elem, id) => {
            let activePage = url.pathname

            return (
                <NavLink
                    className={[(activePage == elem.link && !isProductsOpen ? classes.active : "")].join(' ')}
                    key={id}
                    to={`${elem.link}`}>
                    {elem.title}
                </NavLink>
            )
        })
    }, [url, locale, isProductsOpen])

    useEffect(() => {
        navigationMenuVisibleState && setNavigationMenuVisibleState(false)
        isProductsOpen && expandBlock()
        isShowCart && dispatcher({ type: SHOW_CARD })
    }, [url])


    function expandBlock() {
        if (!isProductsOpen) {
            const scrollHeight = RoomsWrpRef.current.scrollHeight
            RoomsWrpRef.current.style.height = `${scrollHeight}px`
            RoomsWrpRef.current.style.overflow = `visible`
            setIsProductsOpen(!isProductsOpen)
        } else {
            RoomsWrpRef.current.style.height = `0`
            RoomsWrpRef.current.style.overflow = `hidden`
            setIsProductsOpen(!isProductsOpen)
        }
    }

    const toggleCart = () => {
        if (menuOpened) {
            setMenuOpened(false)
        }
        if (!isUserAuth()) {
            dispatcher(setIsAuth(true))
        } else {
            !isShowCart && dispatcher(setIsShowCart(true))
        }
    }

    const ref = useClickAway(() => {
        dispatcher(setIsShowCart(false))
    });

    const closeMenu = () => {
        if (navigationMenuVisibleState) {
            return setNavigationMenuVisibleState(false)
        }
        setMenuOpened(!menuOpened);
    }

    return (
        <>
            <header className={url.pathname === "/" && !isProductsOpen ? classes.wrapMain : classes.wrap}>
                <div className={classes.top}>
                    <div className={classes.top_wrp}>
                        <div className={classes.top_lang_wrp}>
                            {locale && <div onClick={() => setLocalesModal(true)} className={classes.top_lang}>United Kingdom  {locale.code.toUpperCase()}</div>}
                            <div className={classes.btn} onClick={toProfile}>{t("Personal office")}</div>
                        </div>
                        <div>
                            {user ? <div className={[classes.top_profile_user, classes.top_profile].join(" ")}>{user.name}<span className={classes.top_profile_user_ref}>{user.referral_code}</span></div> :
                                <div className={classes.top_profile} onClick={() => dispatcher(setIsAuth())}>{t("Log in")}</div>}
                            {user ? <div className={classes.top_auth} onClick={exit}>{t("Log out")}</div> :
                                <NavLink to="/registration" className={classes.top_auth}>{t("Sign up")}</NavLink>}
                        </div>

                    </div>
                </div>
                <div className={classes.container}>
                    <div className={classes.container_left}>
                        <div onClick={expandBlock} className={[(isProductsOpen || url.pathname.includes("product") ? classes.active : classes.link)].join(' ')}>{t("Products")}</div>
                        {templateLinks}
                    </div>
                    <div className={classes.logo}>
                        <NavLink to="/"><Logo /></NavLink>
                    </div>
                    <div className={classes.container_right}>
                      {//  <NavLink className={classes.search} to="">{t("Search")}</NavLink>
                      }
                        <div>
                            {//<NavLink to="" className={classes.heart}>{t("Wishlist")}<div className={classes.count}>0</div></NavLink>
                            }
                            <div className={classes.cart_wrp}>
                                <div className={classes.cart_wrp}>
                                    <div className={[classes.cart, isShowCart ? classes.cart_open : ""].join(" ")} onClick={toggleCart}>{t("My cart")} <div className={classes.count}>{!isUserAuth()? "0" :cart?.items_count * cart?.items_qty || 0}</div>
                                    </div>
                                </div>
                                {isShowCart && <div ref={ref}><CartDropDown /></div>}
                            </div>
                        </div>
                    </div>
                    <div className={classes.mobile}>
                      {  //<NavLink className={classes.mobile_search} to=""></NavLink>
                      }
                        <div className={classes.mobile_cart_wrp}>
                            <div className={[classes.mobile_cart, isShowCart ? classes.cart_open : ""].join(" ")} onClick={toggleCart}></div>
                        </div>
                      {//  <NavLink to="" className={classes.mobile_heart}></NavLink>
                      }
                        <div className={classes.burger}
                            onClick={closeMenu}
                        >
                        </div>
                    </div>
                </div>
            </header >
            <MobileMenu
                menuOpened={menuOpened}
                setMenuOpened={setMenuOpened}
                setLocalesModal={setLocalesModal}
                navigationMenuVisibleState={navigationMenuVisibleState}
                setNavigationMenuVisibleState={setNavigationMenuVisibleState} />
            <ExpandBlock expandBlock={expandBlock} RoomsWrpRef={RoomsWrpRef} />

            {templateLocalesModal}
        </>
    )
}

export default Header