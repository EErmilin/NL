import classes from "./ThirdStep.module.scss";
import React from 'react';
import "../../Registration.css"
import Input from "../../../../../components/UI/areas/Input/Input";
import CustomSelect from "../../../../../components/UI/areas/CustomSelect/CustomSelect";
import CustomRadio from "../../../../../components/UI/areas/CustomRadio/CustomRadio";


export const ThirdStep = () => {

  return (
<div className={classes.step_content}>
      <div className={classes.step_content_title}>Enter your details</div>
      <div>
        <Input placeholder={"Surname*"} />

        <Input placeholder={"Name*"} />

        <Input placeholder={"Date of Birth*"} />
        <CustomSelect placeholder={"A country*"} />

        <Input placeholder={"City*"} />
        <CustomRadio
          className={classes.radio}
          onChange={() => { }}
          label={"What's your gender*"}
          listRadio={[{
            text: "Female",
            value: true
          }, { text: "Male", value: false }]} />

        <CustomSelect placeholder={"Select the best way to contact*"} label={"Contact preferences*"} />
        <div className={classes.step_content_text_gray}>* - Required fields</div>
      </div>
    </div>
  )
}

export default ThirdStep
