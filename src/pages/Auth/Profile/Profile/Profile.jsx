import moment from "moment";
import React from "react"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../../../components/NavBar/NavBar";
import { getProfile } from "../../../../store/actions/authActions";
import classes from "./Profile.module.scss";

export const Profile = () => {

  const user = useSelector(state => state.auth.user);

  const dispatcher = useDispatch()

  useEffect(() => {
    dispatcher(getProfile())
  }, [])

  if (!user) return

  const regDate = moment(user.created_at).format("DD/MM/YYYY")

  return (
    <div className={classes.wrapper}>
      <div className={classes.profile_}>
        <div className={classes.profile_}>
          <h2 className={classes.profile_title}>My information</h2>
          <div className={classes.profile_flex}>
            <div>
              <div className={classes.profile_gray}>ID</div>
              <div className={classes.profile_value}>{user.id}</div>
            </div>
          </div>
          <div className={classes.profile_flex}>
            <div>
              <div className={classes.profile_gray}>Date of registration</div>
              <div className={classes.profile_value}>{regDate}</div>
            </div>
            <div>
              <div className={classes.profile_gray}>The contract is valid until</div>
              <div className={classes.profile_value}>12/04/2024</div>
            </div>
            <div></div>
          </div>
          <div className={classes.profile_flex}>
            <div>
              <div className={classes.profile_gray}>Surname</div>
              <div className={classes.profile_value}>{user.last_name}</div>
            </div>
            <div >
              <div className={classes.profile_gray}>Name</div>
              <div className={classes.profile_value}>{user.first_name}</div>
            </div>
          </div>
          <div className={classes.profile_flex}>
            <div>
              <div className={classes.profile_gray}>Day of birth</div>
              <div className={classes.profile_value}>{user.date_of_birth}</div>
            </div>
            <div>
              <div className={classes.profile_gray}>Gender</div>
              <div className={classes.profile_value}>{user.gender}</div>
            </div>
          </div>
          <div>
            <div className={classes.profile_gray}>Phone</div>
            <div className={classes.profile_value}>{user.phone}</div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Profile
