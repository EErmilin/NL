import React from "react"
import classes from "./Business.module.scss";
import InfoPageUnit from "../../../components/InfoPageUnit/InfoPageUnit";
import axios from "axios";
import axiosCustom from "../../../axios/axiosCustom";

export const Business = () => {

  const [data, setData] = React.useState(null);


  React.useEffect(() => {
    
    try {
      axiosCustom.get("http://148.251.20.4:5555/api/v1/pages/business").then((resp) => {

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

export default Business
