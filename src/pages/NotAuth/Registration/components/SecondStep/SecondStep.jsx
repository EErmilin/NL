import classes from "./SecondStep.module.scss";
import React from 'react';
import "../../Registration.css"
import Input from "../../../../../components/UI/areas/Input/Input";
import CustomSelect from "../../../../../components/UI/areas/CustomSelect/CustomSelect";
import useToggleVisibility from '../../../../../hooks/useToggleVisibility';
import ConfirmSmsCodeModal from "../../../../../components/modals/ConfirmSmsCodeModal/ConfirmSmsCodeModal";

export const SecondStep = ({ clearErrorAndChange, values }) => {




  return (
    <div className={classes.step_content}>
      <div className={classes.step_content_title}>Enter the phone number to which you will receive a registration code</div>
      <div className={classes.step_phone}>
        <CustomSelect className={classes.step_phone_country} placeholder={"+7"} />
        <Input
          className={classes.step_phone_input}
          value={values.phone}
          mask={"(999) 999-99-99"}
          name="phone"
          id="phone"
          onChange={(e) => {
            return clearErrorAndChange("phone", e.target.value)
          }} />
      </div>
    </div>
  )
}

export default SecondStep
