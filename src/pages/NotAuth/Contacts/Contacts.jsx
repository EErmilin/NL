import React from "react"
import classes from "./Contacts.module.scss";
import InfoPageUnit from "../../../components/InfoPageUnit/InfoPageUnit";
import axios from "axios";
import axiosCustom from "../../../axios/axiosCustom";

export const Contacts = () => {

  const [data, setData] = React.useState(null);


  React.useEffect(() => {
    
    try {
      axiosCustom.get("https://testapi.eu-nl.com/api/v1/pages/contacts").then((resp) => {

          setData(resp.data.data)
        });

  } catch (e) {
      if (e.response) {
      }
  }
  }, []);


  if (!data) return null
  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <InfoPageUnit title={data.name}>
          <div dangerouslySetInnerHTML={{ __html: data.html_content }}></div>
        </InfoPageUnit>
      </div>
    </div>
  )
}

export default Contacts
