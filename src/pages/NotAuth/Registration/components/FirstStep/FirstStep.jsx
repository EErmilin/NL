import classes from "./FirstStep.module.scss";
import React from 'react';
import "../../Registration.css"
import Input from "../../../../../components/UI/areas/Input/Input";
import { useDispatch } from "react-redux";
import { checkPartnerId } from "../../../../../store/actions/authActions";
import { useEffect } from "react";
import { useMemo } from "react";


export const FirstStep = ({ clearErrorAndChange, values, errors }) => {

  return (
    <div className={classes.step_content}><div className={classes.step_content_title}>Enter your partner ID.</div>
      <div>
        <Input
          value={values.id}
          name="referral_code"
          id="referral_code"
          placeholder={"ID"}
          errorMessage={errors.referral_code}
          onChange={(e) => {
            return clearErrorAndChange("referral_code", e.target.value)
          }} />
      </div>
    </div>
  )
}

export default FirstStep
