import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import ButtonDefault from "../UI/btns/Button/Button";
import classes from "./NavBar.module.scss";


function NavBar() {
    const page = useParams();
    const user = useSelector(state => state.auth.user);


    /** Масив ссылок */
    const templateLinks = useMemo(() => {
        if (user) {
            let arrLinks = []
            if (user.partner_code) {
                arrLinks = [

                    { link: "profile", title: "My information" },
                    { link: "", title: "My orders" },
                    { link: "", title: "Personal office" },
                    { link: "money", title: "Money" },
                ]
            } else {
                arrLinks = [
                    { link: "", title: "Personal office" },
                    { link: "profile", title: "My information" },
                    { link: "", title: "My orders" },
                    { link: "money", title: "Money" },
                    { link: "", title: "Messages" },

                ]
            }

            return arrLinks.map((elem, id) => {
                let activePage = page['*']
                activePage = activePage.split("/")[0]
                let currentRoute = elem.link.split('/')[0]
                return (
                    <li
                        className={[classes.list_item].join(' ')}
                        key={id} >
                        <NavLink
                            className={[(currentRoute == activePage ? classes.list_item_active : classes.list_item_noactive)].join(' ')}
                            to={`/personal-area/${elem.link}`}
                        >
                            {elem.title}
                        </NavLink>
                    </li>
                )
            })
        }
        return null
    }, [page['*'], user])

    return (
        <>
            <div className={classes.wrap}>
                <div className={classes.links}>
                    <ul className={classes.list}>
                        {templateLinks}
                    </ul>
                </div>
            </div>
            {user?.partner_code && <NavLink to='referal' className={classes.referal}>Referral program</NavLink> }
            <div className={classes.support}>
                <h3 className={classes.support_title}>Go to the support chat</h3>
                <NavLink to="" className={classes.support_link}>Write to support</NavLink>
            </div>
        </>
    )

}

export default NavBar