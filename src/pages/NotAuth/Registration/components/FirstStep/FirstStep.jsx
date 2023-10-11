import classes from "./FirstStep.module.scss";
import React from 'react';
import "../../Registration.css"
import Input from "../../../../../components/UI/areas/Input/Input";


export const FirstStep = ({ clearErrorAndChange, values, errors, isPartnerRegistration=false }) => {

  if(isPartnerRegistration){
    return (
      <div className={classes.purtner_step_content}><div className={classes.purtner_step_content_title}>Enter your partner ID.</div>
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
