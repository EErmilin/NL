import React from "react"
import { useTranslation } from "react-i18next"
import { useDispatch } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom"
import { setIsAuth } from "../../store/actions/routerActions"
import classes from "./Footer.module.scss"


function Footer() {
    const { t } = useTranslation()

    const dispatcher = useDispatch()
    const navigate = useNavigate()

    const toProfile = () => {
        if (!localStorage.getItem('token') || localStorage.getItem('token') === 'undefined') {
            dispatcher(setIsAuth(true))
        }
        else {
            navigate("/personal-area")
        }
    }
    return (
        <div className={classes.footer}>
            <div className={classes.footer_content}>
                <div>
                    <div className={classes.footer_content_title}>{t("NEW BRAND NAME")}</div>
                    <div className={classes.footer_content_links}>
                        <NavLink className={classes.footer_content_link} to="/OurStory">{t("Our story")}</NavLink>
                        <NavLink className={classes.footer_content_link} to="">{t("Product")}</NavLink>
                        <NavLink className={classes.footer_content_link} to="">{t("My cart")}</NavLink>
                        <div className={classes.footer_content_link} onClick={toProfile}>{t("Personal Office")}</div>
                    </div>
                </div>
                <div>
                    <div className={classes.footer_content_title}>{t("CUSTOMER SERVICE")}</div>
                    <div className={classes.footer_content_links}>
                        <NavLink className={classes.footer_content_link} to="">{t("Order status")}</NavLink>
                        <NavLink className={classes.footer_content_link} to="">{t("Delivery and payment")}</NavLink>
                        <NavLink className={classes.footer_content_link} to="">{t("Return and Exchanges")}</NavLink>
                        <NavLink className={classes.footer_content_link} to="">{t("FAQs")}</NavLink>
                        <NavLink className={classes.footer_content_link} to="/LoyaltyProgram">{t("Loyalty program")}</NavLink>
                        <NavLink className={classes.footer_content_link} to="/publicoffer">{t("Public offer")}</NavLink>
                        <NavLink className={classes.footer_content_link} to="/privacypolicy">{t("Privacy policy")}</NavLink>
                    </div>
                </div>
                <div>
                    <div className={classes.footer_content_title}>{t("ACCOUNT")}</div>
                    <div className={classes.footer_content_links}>
                        <div className={classes.footer_content_link} onClick={toProfile}>{t("My account")}</div>
                    </div>
                </div>
                <div>
                    <div className={classes.footer_content_contacts}>
                        <div className={classes.footer_content_contacts_link}>instagram</div>
                        <div className={classes.footer_content_contacts_phone}>+ 371 (258) 9-3949</div>
                        <div className={classes.footer_content_contacts_gray}>e-mail:</div>
                        <div>careline@eu-nl.com</div>
                        <div>ООО "NL Continent Baltic", рег.: 40103781398LV-1003, Riga, Maza Krasta street 83</div>
                        <div className={classes.footer_content_contacts_ps}><span className={classes.footer_content_contacts_ps_text}>Give an email, get the newsletter.</span> <span className={classes.footer_content_contacts_ps_arrow} /></div>
                    </div>
                </div>

            </div>
            <div className={classes.footer_bottom}>
                <span className={classes.footer_bottom_text}>© NL International 2000-2023</span>
            </div>

        </div>
    )
}

export default Footer