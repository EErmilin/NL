import { useEffect, useMemo } from "react";
import { NavLink, useParams } from "react-router-dom";
import classes from "./NavBar.module.scss";


function NavBar() {
    const page = useParams();


    /** Масив ссылок */
    const templateLinks = useMemo(() => {
        let arrLinks = [
            { link: "", title: "Personal office" },
            { link: "profile", title: "My information" },
            { link: "", title: "My orders" },
            { link: "", title: "Money" },
            { link: "", title: "Messages" },

        ]


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
    }, [page['*']])


    return (
        <div className={classes.wrap}>
            <div className={classes.links}>
                <ul className={classes.list}>
                    {templateLinks}
                </ul>
            </div>
        </div>
    )
}

export default NavBar