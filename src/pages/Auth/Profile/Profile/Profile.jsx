import moment from "moment";
import React from "react"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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

  const regDate = moment(user.created_at).format("DD/MM/YYYY")

  const exit = () => {
    localStorage.setItem('token', 'undefined')
    navigate("/")
  }


  return (
    <div className={classes.wrapper}>
      <div className={classes.profile_wrp}>
        <div >
          <h2 className={classes.profile_title}>My information</h2>
          <div className={classes.profile_flex}>
            <div>
              <div className={classes.profile_gray}>Your cart</div>
              <div className={classes.profile_value}>{user.referral_code}</div>
            </div>
          </div>
          <div className={classes.profile_flex}>
            <div>
              <div className={classes.profile_gray}>Your  name</div>
              <div className={classes.profile_value}>{user.name}</div>
            </div>
          </div>

          <div className={classes.profile_flex}>
            <div>
              <div className={classes.profile_gray}>Country</div>
              <div className={classes.profile_value}>{user.country}</div>
            </div>
          </div>

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
              <div className={classes.profile_value}>{user?.gender}</div>
            </div>
          </div>


          <div>
            <div className={classes.profile_gray}>Contact preferences</div>
            <div className={classes.profile_value}>{user?.preferred_contact}</div>
          </div>
        </div>

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
              <div className={classes.profile_value}>{"+"+user?.parent_customer?.phone}</div>
            </div>
          </div>

          <div className={classes.profile_flex}>
            <div>
              <div className={classes.profile_gray}>Contact preferences</div>
              <div className={classes.profile_value}>{user?.parent_customer?.preferred_contact}</div>
            </div>
          </div>
        </div>}
      </div>

      <div className={classes.exit} onClick={exit}> exit</div>
    </div>
  )
}

export default Profile
