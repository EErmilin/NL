import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import useToggleVisibility from "../../hooks/useToggleVisibility";
import BecomePartnerModal from "../modals/BecomePartnerModal/BecomePartnerModal";
import SupportModal from "../modals/SupportModal/SupportModal";
import ButtonDefault from "../UI/btns/Button/Button";
import classes from "./NavBar.module.scss";


function NavBar() {
    const page = useParams();
    const user = useSelector(state => state.auth.user);
    const navigate = useNavigate()
    const [becomePartnerModal, setBecomePartnerModal, closeBecomePartnerModal] = useToggleVisibility(false)
    const [supportModal, setSupportModal, closeSupportModal] = useToggleVisibility(false)

    const templateBecomePartnerModal = becomePartnerModal && (
        <BecomePartnerModal
            closeModal={closeBecomePartnerModal}
            btnCancelClick={() => setBecomePartnerModal(false)} />
    )
    const templateSupportModal = supportModal && (
        <SupportModal
            closeModal={closeSupportModal}
            btnCancelClick={() => setSupportModal(false)} />
    )

    /** Масив ссылок */
    const templateLinks = useMemo(() => {
        if (user) {
            let arrLinks = []
            if (user.partner_code) {
                arrLinks = [
                    { link: "profile", title: "My information" },
                    { link: "orders", title: "My orders" },
                    { link: "personal-office", title: "Personal office" },
                    { link: "money", title: "Money" },
                ]
            } else {
                arrLinks = [
                    { link: "personal-office", title: "Personal office" },
                    { link: "profile", title: "My information" },
                    { link: "orders", title: "My orders" },
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
              {user?.is_partner &&
        <div className={classes.starter}>
          <h1 className={classes.starter_title}>Starter Packs</h1>
          <NavLink to="/products/31" className={classes.starter_link}>Select a pack</NavLink>
        </div>
      }
            <div className={classes.wrap}>
                <div className={classes.links}>
                    <ul className={classes.list}>
                        {templateLinks}
                    </ul>
                </div>
            </div>
            {user?.partner_code && <div className={classes.referal} onClick={() => navigate('referal')}><div className={classes.referal_link}>Referral program</div></div>}
            <div className={classes.support}>
                <h3 className={classes.support_title}>Go to the support chat</h3>
                <div onClick={() => setSupportModal(true)} className={classes.support_link}>Write to support</div>
            </div>
            {user?.role == "client" && <div className={classes.become}>
                <h3 className={classes.become_title}>Become a business partner</h3>
                <div onClick={() => setBecomePartnerModal(true)} target={"_blank"} className={classes.become_link}>Update</div>
            </div>}
            {templateBecomePartnerModal}
            {templateSupportModal}
        </>
    )

}

export default NavBar