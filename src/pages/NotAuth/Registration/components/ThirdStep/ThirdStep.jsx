import classes from "./ThirdStep.module.scss";
import React from 'react';
import "../../Registration.css"
import Input from "../../../../../components/UI/areas/Input/Input";
import CustomSelect from "../../../../../components/UI/areas/CustomSelect/CustomSelect";
import CustomRadio from "../../../../../components/UI/areas/CustomRadio/CustomRadio";
import CustomDatePicker from "../../../../../components/UI/areas/CustomDatePicker/CustomDatePicker";
import moment from 'moment';

const contactOptions = [
  {
    label: "Phone",
    value: "PHONE"
  },
  {
    label: "Email",
    value: "EMAIL"
  },
  {
    label: "Telegram",
    value: "TELEGRAM"
  },
  {
    label: "Whatsapp",
    value: "WHATSAPP"
  },
]


export const ThirdStep = ({ clearErrorAndChange, values, errors, countries }) => {

  const countresOptions = countries?.map((country) => { return { label: country.name, value: country.phone_code } })

  return (
    <div className={classes.step_content}>
      <div className={classes.step_content_title}>Enter your details</div>
      <div>
        <Input
          value={values.last_name}
          errorMessage={errors.confirmErrors["last_name"] ? errors.confirmErrors["last_name"][0] : ""}
          onChange={(e) => {
            return clearErrorAndChange("last_name", e.target.value)
          }}
          placeholder={"Surname*"} />



        <Input
          value={values.first_name}
          errorMessage={errors.confirmErrors["first_name"] ? errors.confirmErrors["first_name"][0] : ""}
          onChange={(e) => {
            return clearErrorAndChange("first_name", e.target.value)
          }}
          placeholder={"Name*"} />

        <CustomDatePicker
          name={"date_of_birth"}
          value={values.date_of_birth}
          onChange={(value) => {
            clearErrorAndChange("date_of_birth", (moment(value).format("yyyy-MM-DD")))
          }}
          mask={[/\d/, /\d/, ".", /\d/, /\d/, ".", /\d/, /\d/, /\d/, /\d/]}
          errorMessage={errors.confirmErrors["date_of_birth"] ? errors.confirmErrors["date_of_birth"][0] : ""}
          blurInputOnSelect
          label={""} />

        <CustomSelect
          errorMessage={errors.confirmErrors["country_id"] ? errors.confirmErrors["country_id"][0] : ""}
          placeholder={"A country*"}
          options={countresOptions}
          onChange={(e) => {
            return clearErrorAndChange("country_id", e)
          }} />



        <Input
          errorMessage={errors.confirmErrors["city"] ? errors.confirmErrors["city"][0] : ""}
          onChange={(e) => {

            return clearErrorAndChange("city", e.target.value)
          }}
          placeholder={"City*"} />
        <CustomRadio
          value={values.gender}
          checked={true}
          className={classes.radio}
          label={"What's your gender*"}
          onChange={(e) => {
            return clearErrorAndChange("gender", e)
          }}
          listRadio={[{
            text: "Female",
            value: "FEMALE"
          }, { text: "Male", value: "MALE" }]} />

        <CustomSelect
          placeholder={"Select the best way to contact*"}
          label={"Contact preferences*"}
          classNameLabel={classes.select_label}
          errorMessage={errors.confirmErrors["contact_value"] && !values.contact_type ? errors.confirmErrors["contact_value"][0] : ""}
          options={contactOptions}
          value={contactOptions.find(elem => elem.value == values.contact_type)}
          onChange={(value) => clearErrorAndChange("contact_type", value.value)} />

        {values.contact_type && <Input
          errorMessage={errors.confirmErrors["contact_value"] ? errors.confirmErrors["contact_value"][0] : ""}
          onChange={(e) => {

            return clearErrorAndChange("contact_value", e.target.value)
          }}
          placeholder={"Contact*"} />}
        <div className={classes.step_content_text_gray}>* - Required fields</div>
      </div>
    </div>
  )
}

export default ThirdStep
