import moment from "moment";
import React from "react"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import NavBar from "../../../../components/NavBar/NavBar";
import ButtonDefault from "../../../../components/UI/btns/Button/Button";
import { getProfile } from "../../../../store/actions/authActions";
import classes from "./Profile.module.scss";

export const Profile = () => {

  const user = useSelector(state => state.auth.user);
  const navigate = useNavigate()

  const dispatcher = useDispatch()

  useEffect(() => {
    dispatcher(getProfile())
  }, [])

  if (!user) return

  const preferred_contact = user.contacts && user.contacts.length && user.contacts.find((contact) => contact.contact_type === user.preferred_contact)
  const partner_preferred_contact = user.parent_customer?.contacts && user.parent_customer.contacts.length && user.parent_customer.contacts.find((contact) => contact.contact_type === user.parent_customer.preferred_contact)

  const renderInfo = () => {
    if (user.partner_code) {
      return (<div >
        <h2 className={classes.profile_title}>My information</h2>
        <div className={classes.profile_flex}>
          <div>
            <div className={classes.profile_gray}>Your ID</div>
            <div className={classes.profile_value}>{user.referral_code}</div>
          </div>
        </div>
        <div className={classes.profile_flex}>
          <div className={classes.profile_flex_left}>
            <div className={classes.profile_gray}>Date of registration</div>
            <div className={classes.profile_value}>{moment(user.created_at).format("DD/MM/YYYY")}</div>
          </div>
          <div>
            <div className={classes.profile_gray}>The contract is valid until</div>
            <div className={classes.profile_value}>{moment(user.created_at).add(1, 'year').format("DD/MM/YYYY")}</div>
          </div>
        </div>

        <div className={classes.profile_flex}>
          <div className={classes.profile_flex_left}>
            <div className={classes.profile_gray}>Surname</div>
            <div className={classes.profile_value}>{user.last_name}</div>
          </div>
          <div>
            <div className={classes.profile_gray}>Name</div>
            <div className={classes.profile_value}>{user.first_name}</div>
          </div>
        </div>

        <div className={classes.profile_flex}>
          <div className={classes.profile_flex_left}>
            <div className={classes.profile_gray}>Day of birth</div>
            <div className={classes.profile_value}>{moment(user.date_of_birth).format("DD/MM/YYYY")}</div>
          </div>
          <div>
            <div className={classes.profile_gray}>Gender</div>
            <div className={classes.profile_value}>{user?.gender.toLowerCase()}</div>
          </div>

        </div>

        <div className={classes.profile_flex}>
          <div>
            <div className={classes.profile_gray}>Country</div>
            <div className={classes.profile_value}>{user?.country?.name}</div>
          </div>
        </div>
        <div className={classes.profile_flex}>
          <div >
            <div className={classes.profile_gray}>City</div>
            <div className={classes.profile_value}>{user.city}</div>
          </div>
        </div>
        <div className={classes.profile_flex}>
          <div>
            <div className={classes.profile_gray}>Phone</div>
            <div className={classes.profile_value}>+{user.phone}</div>
          </div>
        </div>
        <div>
          <div className={classes.profile_gray}>Contact preferences</div>
          <div className={classes.profile_value}>{`${preferred_contact.contact_type}: ${preferred_contact.contact_type ==="PHONE"  ? "+": ''}${preferred_contact.contact_value}`}</div>
        </div>
      </div>
      )
    }
    return (
      <div>
        <h2 className={classes.profile_title}>My information</h2>
        <div className={classes.profile_flex}>
          <div>
            <div className={classes.profile_gray}>Your ID</div>
            <div className={classes.profile_value}>{user.referral_code}</div>
          </div>
        </div>
        <div className={classes.profile_flex}>
          <div>
            <div className={classes.profile_gray}>Your name</div>
            <div className={classes.profile_value}>{user.name}</div>
          </div>
        </div>

        {user.country && <div className={classes.profile_flex}>
          <div>
            <div className={classes.profile_gray}>Country</div>
            <div className={classes.profile_value}>{user.country.name}</div>
          </div>
        </div>}

        <div className={classes.profile_flex}>
          <div>
            <div className={classes.profile_gray}>Your city</div>
            <div className={classes.profile_value}>{user.city}</div>
          </div>
        </div>

        <div className={classes.profile_flex}>
          <div>
            <div className={classes.profile_gray}>Day of birth</div>
            <div className={classes.profile_value}>{moment(user?.date_of_birth).format("DD/MM/YYYY")}</div>
          </div>
        </div>

        <div className={classes.profile_flex}>
          <div>
            <div className={classes.profile_gray}>Gender</div>
            <div className={classes.profile_value}>{user?.gender.toLowerCase()}</div>
          </div>
        </div>
        <div className={classes.profile_flex}>
          <div>
            <div className={classes.profile_gray}>Phone</div>
            <div className={classes.profile_value}>+{user.phone}</div>
          </div>
        </div>
        <div>
          <div className={classes.profile_gray}>Contact preferences</div>
          <div className={classes.profile_value}>{`${preferred_contact.contact_type}: ${preferred_contact.contact_type ==="PHONE"  ? "+": ''}${preferred_contact.contact_value}`}</div>
        </div>
      </div>
    )
  }

  return (
    <div className={classes.wrapper}>
      {user?.is_partner &&
        <div className={classes.starter}>
          <h1 className={classes.starter_title}>Starter Packs</h1>
          <NavLink to="/products/31" className={classes.starter_link}>Select a pack</NavLink>
        </div>
      }
      <div className={classes.profile_wrp}>

        {renderInfo()}

        {user?.parent_customer &&
          <div >
            <h2 className={classes.profile_title}>Mentor</h2>
            <div className={classes.profile_flex}>
              <div>
                <div className={classes.profile_gray}>ID</div>
                <div className={classes.profile_value}>{user?.parent_customer?.referral_code}</div>
              </div>
            </div>
            <div className={classes.profile_flex}>
              <div>
                <div className={classes.profile_gray}>Mentor</div>
                <div className={classes.profile_value}>{user?.parent_customer?.first_name + " " + user?.parent_customer?.last_name}</div>
              </div>
            </div>

            <div className={classes.profile_flex}>
              <div>
                <div className={classes.profile_gray}>Phone</div>
                <div className={classes.profile_value}>{"+" + user?.parent_customer?.phone}</div>
              </div>
            </div>

            <div className={classes.profile_flex}>
              <div>
                <div className={classes.profile_gray}>Contact preferences</div>
                <div className={classes.profile_value}>{`${partner_preferred_contact.contact_type}: ${partner_preferred_contact.contact_type ==="PHONE"  ? "+": ''}${partner_preferred_contact.contact_value}`}</div>
              </div>
            </div>
          </div>}
      </div>
    </div>
  )
}

export default Profile
