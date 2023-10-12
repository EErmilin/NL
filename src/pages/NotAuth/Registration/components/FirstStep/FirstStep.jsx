import classes from "./FirstStep.module.scss";
import React from 'react';
import "../../Registration.css"
import Input from "../../../../../components/UI/areas/Input/Input";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";


export const FirstStep = ({ clearErrorAndChange, values, errors, isPartnerRegistration = false }) => {

  const [searchParams, setSearchParams] = useSearchParams()
  const partner = searchParams.get("partner")
  const first = searchParams.get("first")
  const last = searchParams.get("last")
  useEffect(() => {
    clearErrorAndChange("partner_code", partner)
  }, [partner])

  if (isPartnerRegistration) {
    return (
      <div className={classes.purtner_step_content}>
        <div>

          <div className={classes.purtner_step_ref}>
          {first +" " + last} <span className={classes.purtner_step_ref_gray}>ID {" " +values.partner_code}</span>
          </div>

        </div>
        <div className={classes.purtner_step_phone_input_wrp}>
          <Input
            className={classes.purtner_step_phone_input}
            value={values.phone}
            placeholder={"Enter your phone number"}
            name="phone"
            id="phone"
            errorMessage={errors.phone}
            onChange={(e) => {
              return clearErrorAndChange("phone", e.target.value.replace(/[^+\d]/g, ''))
            }} />
        </div>
      </div>
    )
  }

  return (
    <div className={classes.step_content}><div className={classes.step_content_title}>Enter your partner ID.</div>
      <div>
        <Input
          value={values.referral_code}
          name="partner_code"
          id="partner_code"
          placeholder={"ID"}
          errorMessage={errors.referral_code}
          onChange={(e) => {
            return clearErrorAndChange("partner_code", e.target.value)
          }} />
      </div>
    </div>
  )
}

export default FirstStep
