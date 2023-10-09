import classes from "./SecondStep.module.scss";
import React from 'react';
import "../../Registration.css"
import Input from "../../../../../components/UI/areas/Input/Input";
import CustomSelect from "../../../../../components/UI/areas/CustomSelect/CustomSelect";
import useToggleVisibility from '../../../../../hooks/useToggleVisibility';
import ConfirmSmsCodeModal from "../../../../../components/modals/ConfirmSmsCodeModal/ConfirmSmsCodeModal";

export const SecondStep = ({ clearErrorAndChange, values, errors, countries }) => {

  const phoneOptions = countries?.map((country) => { return { label: country.phone_code + " " + country.name, value: country.phone_code } })

  return (
    <div className={classes.step_content}>
      <div className={classes.step_content_title}>Enter the phone number to which you will receive a registration code</div>
      <div className={classes.step_phone}>
        <div className={classes.step_phone_wrp}>
          <CustomSelect
            className={classes.step_phone_country}
            placeholder={"+7"}
            options={phoneOptions}
            value={phoneOptions.find(elem => elem.value == values.country_code)}
            errorMessage={errors.phone? " " : false}
            onChange={(e) => {
              return clearErrorAndChange("country_code", e.value)
            }} />
        </div>
        <div className={classes.step_phone_input_wrp}>
          <Input
            className={classes.step_phone_input}
            value={values.phone}
            mask={"(999) 999-99-99"}
            name="phone"
            id="phone"
            errorMessage={errors.phone}
            onChange={(e) => {
              return clearErrorAndChange("phone", e.target.value.replace(/[^+\d]/g, ''))
            }} />
        </div>
      </div>
    </div>
  )
}

export default SecondStep
