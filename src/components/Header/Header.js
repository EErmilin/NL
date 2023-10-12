import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import classes from "./Header.module.scss"
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import { useDispatch, useSelector } from "react-redux";
import { setIsAuth } from "../../store/actions/routerActions";
import useToggleVisibility from "../../hooks/useToggleVisibility";
import LocalesModal from "../modals/LocalesModal/LocalesModal";
import { useTranslation } from "react-i18next";
import { clearUserData } from "../../store/actions/authActions";

function Header() {
    const [localesModal, setLocalesModal, closeLocalesModal] = useToggleVisibility(false)
    const user = useSelector(state => state.auth.user);
    const dispatcher = useDispatch()
    const navigate = useNavigate()
    const locale = useSelector(state => state.router.locale);
    const { t } = useTranslation()

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

    return (
        <>
            <header className={classes.wrap}>
                <div className={classes.top}>
                    <div className={classes.top_wrp}>
                        <div className={classes.top_lang_wrp}>
                            {locale && <div onClick={()=>setLocalesModal(true)} className={classes.top_lang}>United Kingdom | {locale.code.toUpperCase()}</div>}
                            <div className={classes.btn} onClick={toProfile}>{t("Personal office")}</div>
                        </div>
                        <div>
                       {user? <div className={[classes.top_profile_user, classes.top_profile].join(" ")}>{user.name}<span className={classes.top_profile_user_ref}>{user.referral_code}</span></div>:
                            <div className={classes.top_profile} onClick={() => dispatcher(setIsAuth())}>{t("Log in")}</div>}
                            {` | `}
                            {user? <div className={classes.top_auth} onClick={exit}>{t("Log out")}</div> : 
                            <NavLink to="/registration" className={classes.top_auth}>{t("Sign up")}</NavLink>}
                        </div>

                    </div>
                </div>
                <div className={classes.container}>
                    <div className={classes.container_left}>
                        <NavLink to="">{t("Products")}</NavLink>
                        <NavLink to="/OurStory">{t("Our story")}</NavLink>
                        <NavLink to="/Business">{t("Business")}</NavLink>
                        <NavLink to="">{t("News")}</NavLink>
                        <NavLink to="/Contacts">{t("Contacts")}</NavLink>
                    </div>
                    <div className={classes.logo}>
                        <NavLink to="/"><Logo /></NavLink>
                    </div>
                    <div className={classes.container_right}>
                        <NavLink className={classes.search} to="">{t("Search")}</NavLink>
                        <div>
                            <NavLink to="" className={classes.heart}>{t("Wishlist")}</NavLink>
                            <div className={classes.cart}>{t("My cart")}</div>
                        </div>
                    </div>
                </div>

            </header >
            {templateLocalesModal}
        </>
    )
}

export default Header