import classes from "./FirstStep.module.scss";
import React from 'react';
import "../../Registration.css"
import Input from "../../../../../components/UI/areas/Input/Input";
import { useDispatch } from "react-redux";
import { checkPartnerId } from "../../../../../store/actions/authActions";


export const FirstStep = ({ clearErrorAndChange, values }) => {

  return (
    <div className={classes.step_content}><div className={classes.step_content_title}>Enter your partner ID.</div>
      <div>
        <Input
          value={values.id}
          name="id"
          id="id"
          placeholder={"ID"}
          onChange={(e) => {
            return clearErrorAndChange("id", e.target.value)
          }} />
      </div>
    </div>
  )
}

export default FirstStep
