import React from "react"
import { useSelector } from "react-redux";
import ButtonDefault from "../../../../components/UI/btns/Button/Button";

import classes from "./PersonalOffice.module.scss";


export const PersonalOffice = () => {

  const user = useSelector(state => state.auth.user);

  if (!user) return
  return (<>
    <div className={classes.wrapper}>
      <h2 className={classes.title}>Personal office</h2>
      <div className={classes.info}>
        <div className={classes.info_volume}>
          <div className={classes.info_r}>{user.qualification_rank}</div>
          <div className={classes.info_volume_wrp}>
            <div className={classes.info_volume_gray}>Group Volume (PV)</div>
            <div className={classes.info_volume_value}>0</div>
          </div>
          <div className={classes.info_volume_wrp}>
            <div className={classes.info_volume_gray}>Personal Volume (PV)</div>
            <div className={classes.info_volume_value}>{user.balance_pv}</div>
          </div>
        </div>
        <div className={classes.documents}>Documents</div>
      </div>
      <div className={classes.qualifications}>Qualifications</div>
    </div>
    <div className={classes.btns_wrp}>
      <div className={classes.btns}>
        <div className={classes.btns_title}>Statement</div>
        <div className={classes.btns_link}>Go to the section</div>
      </div>
      <div className={classes.btns}>
        <div className={classes.btns_title}>Downline</div>
        <div className={classes.btns_link}>Go to the section</div>
      </div>
      <div className={classes.btns}>
        <div className={classes.btns_title}>My clients</div>
        <div className={classes.btns_link}>Go to the section</div>
      </div>
    </div>
  </>
  )
}

export default PersonalOffice
