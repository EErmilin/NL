import React from "react"
import { NavLink } from "react-router-dom"
import classes from "./Footer.module.scss"


function Footer() {
    return (
        <div className={classes.footer}>
            <div className={classes.footer_content}>
                <div>
                    <div>NEW BRAND NAME</div>
                    <div className={classes.footer_content_links}>
                        <NavLink className={classes.footer_content_link} to="/OurStory">Our story</NavLink>
                        <NavLink className={classes.footer_content_link} to="">Product</NavLink>
                        <NavLink className={classes.footer_content_link} to="">My cart</NavLink>
                        <NavLink className={classes.footer_content_link} to="">Personal Office</NavLink>
                    </div>
                </div>
                <div>
                    <div>CUSTOMER SERVICE</div>
                    <div className={classes.footer_content_links}>
                        <NavLink className={classes.footer_content_link} to="">Order status</NavLink>
                        <NavLink className={classes.footer_content_link} to="">Delivery and payment</NavLink>
                        <NavLink className={classes.footer_content_link} to="">Return and Exchanges</NavLink>
                        <NavLink className={classes.footer_content_link} to="">FAQs</NavLink>
                        <NavLink className={classes.footer_content_link} to="">Loyalty program</NavLink>
                        <NavLink className={classes.footer_content_link} to="">Public offer</NavLink>
                        <NavLink className={classes.footer_content_link} to="">Privacy policy</NavLink>
                    </div>
                </div>
                <div>
                    <div>ACCOUNT</div>
                    <div className={classes.footer_content_links}>
                        <NavLink className={classes.footer_content_link} to="">My account</NavLink>
                    </div>
                </div>
                <div>
                    <div className={classes.footer_content_contacts}>
                        <div className={classes.footer_content_contacts_link}>instagram</div>
                        <div className={classes.footer_content_contacts_phone}>+ 371 (258) 9-3949</div>
                        <div className={classes.footer_content_contacts_gray}>e-mail:</div>
                        <div>careline@eu-nl.com</div>
                        <div>ООО "NL Continent Baltic", рег.: 40103781398LV-1003, Riga, Maza Krasta street 83</div>
                        <div className={classes.footer_content_contacts_ps}><span className={classes.footer_content_contacts_ps_text}>Give an email, get the newsletter.</span> <span className={classes.footer_content_contacts_ps_arrow}/></div>
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