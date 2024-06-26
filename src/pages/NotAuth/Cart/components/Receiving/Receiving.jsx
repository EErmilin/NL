import { Checkbox, Spin } from "antd";
import { useFormik } from "formik";
import React from "react"
import { useMemo } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../../../../../components/Breadcrumbs/Breadcrumbs";
import CustomRadio from "../../../../../components/UI/areas/CustomRadio/CustomRadio";
import CustomSelect from "../../../../../components/UI/areas/CustomSelect/CustomSelect";
import CustomTextArea from "../../../../../components/UI/areas/CustomTextArea/CustomTextArea";
import Input from "../../../../../components/UI/areas/Input/Input";
import ButtonDefault from "../../../../../components/UI/btns/Button/Button";
import { getCart, saveAdress } from "../../../../../store/actions/orderActions";
import classes from "./Receiving.module.scss";


export const Receiving = () => {

  const [type, setType] = useState(0)
  const cart = useSelector(state => state.order.cart)
  const dispatcher = useDispatch()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const BREADCRUMBS = [
    {
      title: "Online store",
    },

    {
      title: "Make an order"
    },
  ]

  /** Начальные значения */
  const initialValues = useMemo(() => {
    return {
      phone: "",
      password: "",
      device_name: "web"
    }
  }, [])

  const {
    values,
    handleChange,
    handleSubmit,
    touched,
  } = useFormik({
    initialValues,
    onSubmit: (values) => {

    },
    enableReinitialize: true
  });

  /** Очищаем ошибки и изменяем состояние */
  const clearErrorAndChange = (field, value) => {
    handleChange({ target: { name: field, value: value } })
  }


  const form = useMemo(() => {
    if (type === 0) {
      return <form>
        <CustomRadio
          value={values.gender}
          checked={true}
          className={classes.radio}
          onChange={(e) => {
            return clearErrorAndChange("gender", e)
          }}
          listRadio={[{
            text: "Riga, Marijas st., 7, office 412 а, «Maskavas Nams», 4th floor (elevator on the left at the end of the lobby)",
            value: "Riga, Marijas st., 7, office 412 а, «Maskavas Nams», 4th floor (elevator on the left at the end of the lobby)"
          }]} />
        <CustomRadio
          value={values.gender}
          checked={true}
          className={classes.radio}
          onChange={(e) => {
            return clearErrorAndChange("gender", e)
          }}
          listRadio={[{
            text: "Daugalvpis, Raiņa st., 18, office 9",
            value: "Daugalvpis, Raiņa st., 18, office 9"
          }]} />
        <div className={classes.order_input}>
          <Input
            value={values.id}
            name="phone"
            id="phone"
            placeholder={"Recipient's last name*"}
            //errorMessage={errors.phone}
            onChange={(e) => {
              return clearErrorAndChange("phone", e.target.value)
            }} />
          <div className={classes.order_input_notification}>Please check if your mobile phone number is correct.In case the number is incorrect you won't be able to receive your order.</div>
          <Input
            value={values.id}
            name="phone"
            id="phone"
            placeholder={"Recipient's name*"}
            //errorMessage={errors.phone}
            onChange={(e) => {
              return clearErrorAndChange("phone", e.target.value)
            }} />

          <CustomTextArea label={"Additional information"}></CustomTextArea>
          <Checkbox className={classes.order_checkboxs}>I consent to the processing of personal data</Checkbox>
        </div>
        <div className={classes.order_info}>
          <div className={classes.order_info_wrp}>
            <div className={classes.order_info_gray}>
              Shipping fee
            </div>
            <div className={classes.order_info_text}>
              5 €
            </div>
          </div>
          <div className={classes.order_info_wrp}>
            <div className={classes.order_info_gray}>
              Delivery period
            </div>
            <div className={classes.order_info_text}>
              -
            </div>
          </div>
          <div className={classes.order_info_wrp}>
            <div className={classes.order_info_gray}>
              Order retention period
            </div>
            <div className={classes.order_info_text}>
              30 days
            </div>
          </div>
        </div>
        <div className={classes.order_notification}>
          <span> Attention! Your order will be sent to the regional representative office of the company 25.09.2023.Approximate date of receipt of the order at the regional representative office 26.09.2023.</span>
        </div>
      </form>
    }
    if (type === 1) {
      return <form>
        <CustomRadio
          value={values.gender}
          checked={true}
          className={classes.radio}
          onChange={(e) => {
            return clearErrorAndChange("gender", e)
          }}
          listRadio={[{
            text: "DPD",
            value: "DPD"
          }]} />
        <CustomRadio
          value={values.gender}
          checked={true}
          className={classes.radio}
          onChange={(e) => {
            return clearErrorAndChange("gender", e)
          }}
          listRadio={[{
            text: "Omniva",
            value: "Omniva"
          }]} />
        <div className={classes.order_input}>
          <Input
            value={values.id}
            name="phone"
            id="phone"
            placeholder={"City, location*"}
            //errorMessage={errors.phone}
            onChange={(e) => {
              return clearErrorAndChange("phone", e.target.value)
            }} />
          <Input
            value={values.id}
            name="phone"
            id="phone"
            placeholder={"Street*"}
            //errorMessage={errors.phone}
            onChange={(e) => {
              return clearErrorAndChange("phone", e.target.value)
            }} />

          <div className={classes.order_input_wrp}>
            <Input
              value={values.id}
              name="phone"
              id="phone"
              placeholder={"Number*"}
              //errorMessage={errors.phone}
              onChange={(e) => {
                return clearErrorAndChange("phone", e.target.value)
              }} />
            <Input
              value={values.id}
              name="phone"
              id="phone"
              placeholder={"Building/Unit"}
              //errorMessage={errors.phone}
              onChange={(e) => {
                return clearErrorAndChange("phone", e.target.value)
              }} />
            <Input
              value={values.id}
              name="phone"
              id="phone"
              placeholder={"Apartment/office"}
              //errorMessage={errors.phone}
              onChange={(e) => {
                return clearErrorAndChange("phone", e.target.value)
              }} /></div>
          <Input
            value={values.id}
            name="phone"
            id="phone"
            placeholder={"Postal code*"}
            //errorMessage={errors.phone}
            onChange={(e) => {
              return clearErrorAndChange("phone", e.target.value)
            }} />
          <Input
            value={values.id}
            name="phone"
            id="phone"
            placeholder={"Recipient's last name*"}
            //errorMessage={errors.phone}
            onChange={(e) => {
              return clearErrorAndChange("phone", e.target.value)
            }} />
          <Input
            value={values.id}
            name="phone"
            id="phone"
            placeholder={"Mobile phone number*"}
            //errorMessage={errors.phone}
            onChange={(e) => {
              return clearErrorAndChange("phone", e.target.value)
            }} />
          <div className={classes.order_input_notification}>Please check if your mobile phone number is correct.In case the number is incorrect you won't be able to receive your order.</div>
          <Input
            value={values.id}
            name="phone"
            id="phone"
            placeholder={"Recipient's name*"}
            //errorMessage={errors.phone}
            onChange={(e) => {
              return clearErrorAndChange("phone", e.target.value)
            }} />
          <Input
            value={values.id}
            name="phone"
            id="phone"
            placeholder={"E-mail address*"}
            //errorMessage={errors.phone}
            onChange={(e) => {
              return clearErrorAndChange("phone", e.target.value)
            }} />

        </div>
        <div className={classes.order_checkboxs_accept}>
          <Checkbox className={classes.order_checkboxs}>I accept that:</Checkbox>
          <div className={classes.order_checkboxs_accept_text}>
            <p>1. The import of certain types of goods may be prohibited or restricted in various countries.</p>
            <p>2. For countries that are not part of the EU, there is a different threshold for duty-free import. The larger the order amount, the more likely it is that the recipient will need to pay additional fees upon receipt.</p>
            <p>3. Taxes and duties are calculated by customs in the country of receipt upon arrival of the parcel, depending on the type, quantity and value of the goods.</p>
            <p>4. Depending on changes in the currency exchange rate, parcels whose value is close to the threshold of duty-free importation may be subject to taxes and duties upon receipt.</p>
            <p>5. If the order is returned to the sender due to the fact that DHL cannot contact the recipient, or the recipient does not provide the documents requested from him or refuses to pay the duties, the delivery is not carried out again, a refund will be issued for the order without the cost of delivery.</p>
          </div>
        </div>
        <div className={classes.order_notification}>
          <span> ATTENTION! Payment of the necessary customs duties is the responsibility of the recipient and are paid by him INDEPENDENTLY. The recipient is obliged INDEPENDENTLY to clarify detailed information on prohibited goods, taxes and duties at the customs department in the receiving country or on their website.</span>
        </div>
        <CustomTextArea label={"Additional information"}></CustomTextArea>
        <Checkbox className={classes.order_checkboxs}>I consent to the processing of personal data</Checkbox>
        <div className={classes.order_info}>
          <div className={classes.order_info_wrp}>
            <div className={classes.order_info_gray}>
              Shipping fee
            </div>
            <div className={classes.order_info_text}>
              Free
            </div>
          </div>
          <div className={classes.order_info_wrp}>
            <div className={classes.order_info_gray}>
              Delivery period
            </div>
            <div className={classes.order_info_text}>
              -
            </div>
          </div>
          <div className={classes.order_info_wrp}>
          </div>
        </div>
        <div className={classes.order_notification}>
            <span> The order is sent within 1-3 business days from the moment of placing the order.
              The delivery time is 3-5 days.
              Delivery time may increase due to changes in logistics routes.</span>
          </div>
      </form>
    }

    if (type === 2) {
      return <form>

        <div className={classes.order_input}>
          <Input
            value={values.id}
            name="phone"
            id="phone"
            placeholder={"Recipient's last name*"}
            //errorMessage={errors.phone}
            onChange={(e) => {
              return clearErrorAndChange("phone", e.target.value)
            }} />
          <Input
            value={values.id}
            name="phone"
            id="phone"
            placeholder={"Mobile phone number*"}
            //errorMessage={errors.phone}
            onChange={(e) => {
              return clearErrorAndChange("phone", e.target.value)
            }} />
              <div className={classes.order_input_notification}>Please check if your mobile phone number is correct.In case the number is incorrect you won't be able to receive your order.</div>
          <Input
            value={values.id}
            name="phone"
            id="phone"
            placeholder={"Recipient's name*"}
            //errorMessage={errors.phone}
            onChange={(e) => {
              return clearErrorAndChange("phone", e.target.value)
            }} />
          <Input
            value={values.id}
            name="phone"
            id="phone"
            placeholder={"E-mail address*"}
            //errorMessage={errors.phone}
            onChange={(e) => {
              return clearErrorAndChange("phone", e.target.value)
            }} />
          <CustomTextArea label={"Additional information"}></CustomTextArea>
          <Checkbox className={classes.order_checkboxs}>I consent to the processing of personal data</Checkbox>
          <div className={classes.order_info}>
            <div className={classes.order_info_wrp}>
              <div className={classes.order_info_gray}>
                Shipping fee
              </div>
              <div className={classes.order_info_text}>
                Free
              </div>
            </div>
            <div className={classes.order_info_wrp}>
              <div className={classes.order_info_gray}>
                Delivery period
              </div>
              <div className={classes.order_info_text}>
                3 working days
              </div>
            </div>
            <div className={classes.order_info_wrp}>
            </div>
          </div>
        </div>

      </form>
    }

  }, [type])

  const submit = async () => {
    setLoading(true)
    const response = await dispatcher(saveAdress())
    setLoading(false)
    if(response && response.data && response.data.redirect_url){
      dispatcher(getCart())
      navigate('/cart')
      window.open(response.data.redirect_url, '_blank')
      
    }

  }

  if(loading)return<div className={classes.spin}><Spin size="large" /></div>


  return (
    <div className={classes.order}>
      <div className={classes.order_content}>
        <Breadcrumbs items={BREADCRUMBS}></Breadcrumbs>
        <h1 className={classes.order_title}>Make an order</h1>
        <div className={classes.order_sub_title}>Order to</div>
        <div className={classes.order_input}>
          <CustomSelect placeholder={"select a country*"}></CustomSelect>
        </div>
        <h3>Receiving method</h3>
        <div className={classes.order_content_btns_wrp}>
          <ButtonDefault title={"NL Offices"} className={[classes.order_content_btns_nl, type === 0 ? classes.order_content_btns_active : ""].join(" ")} onClick={() => setType(0)}></ButtonDefault>
          <ButtonDefault title={"Courier Delivery"} className={[classes.order_content_btns_courier, type === 1 ? classes.order_content_btns_active : ""].join(" ")} onClick={() => setType(1)}></ButtonDefault>
          <ButtonDefault title={"Pick-up Point/Locker"} className={[classes.order_content_btns_btn, type === 2 ? classes.order_content_btns_active : ""].join(" ")} onClick={() => setType(2)}></ButtonDefault>
        </div>
        {form}
        <div className={classes.order_payment}>
          <h1 className={classes.order_payment_title}>Payment method</h1>
          <div className={classes.order_input}>
            <Input
              value={values.id}
              name="phone"
              id="phone"
              placeholder={"Bank card"}
              //errorMessage={errors.phone}
              onChange={(e) => {
                return clearErrorAndChange("phone", e.target.value)
              }} />
          </div>
          <div className={classes.order_payment_btn}>
            <ButtonDefault className={classes.order_payment_btn_card} title={"Cart Payment"}></ButtonDefault>
            <ButtonDefault className={classes.order_payment_btn_paypal} title={"Pay Pal"}></ButtonDefault>
          </div>
        </div>
      </div>
      <div className={classes.order_total}>
        <h2 className={classes.order_total_title}>Your order:</h2>
        <div className={classes.order_total_products_wrp}>
          <span className={classes.order_total_products}>Products ({(cart?.items_count * cart?.items_qty) || 0}):</span>
          <span className={classes.order_total_products}>{cart?.formatted_grand_total || "0  €"}</span>
        </div>
        <div className={classes.order_total_products_wrp}>
          <span className={classes.order_total_products}>Delivery:</span>
          <span className={classes.order_total_products}>Free</span>
        </div>
        <div className={classes.order_total_price_wrp}>
          <span className={classes.order_total_price_title}>Total:</span>
          <span className={classes.order_total_price}>{cart?.formatted_grand_total || "0  €"}</span>
        </div>
        <ButtonDefault className={classes.order_total_btn} onClick={submit} title={"Check out"}></ButtonDefault>
      </div>
    </div>
  )
}

export default Receiving
