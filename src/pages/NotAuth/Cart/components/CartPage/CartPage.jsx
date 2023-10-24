import React from "react"
import ButtonDefault from "../../../../../components/UI/btns/Button/Button";
import classes from "./CartPage.module.scss";
import fakeBrand from '../../../../../assets/img/fakeProduct.png';
import { useNavigate } from "react-router-dom";


export const CartPage = () => {

  const navigate = useNavigate()

  //   const { data, isInitialLoading, isError } = useQuery(["Business", { locale: locale }], () =>
  //   axiosCustom.get("https://testapi.eu-nl.com/api/v1/pages/business")
  // );

  return (
    <div className={classes.cart}>
        <div className={classes.cart_return}>Return to the catalog</div>
        <div className={classes.cart_title}>Shopping cart</div>
      <div className={classes.cart_wrp}>
        <div className={classes.cart_products}>
        <div className={classes.cart_products_title}><span>Products in the basket</span><span className={classes.cart_clear}>Clean cart</span> </div>
          <div className={classes.cart_products_item}>
            <img src={fakeBrand} className={classes.cart_products_item_img}></img>
            <div className={classes.cart_products_item_info}>
              <div className={classes.cart_products_item_info_header}>
                <div>
                  <div className={classes.cart_products_item_title}>Smart Go Chocolate</div>
                  <div className={classes.cart_products_item_price}>15 €/5 PV</div>
                </div>
                <div className={classes.cart_products_item_counter}>
                  <span>-</span>
                  <span>2</span>
                  <span>+</span>
                </div>
              </div>
              <div className={classes.cart_products_item_btns}>
                <span className={classes.cart_products_item_heart}>Add to wishlist</span>
                <span className={classes.cart_products_item_delete}>Delete</span>
              </div>
            </div>
          </div>
          <div className={classes.cart_products_item}>
            <img src={fakeBrand} className={classes.cart_products_item_img}></img>
            <div className={classes.cart_products_item_info}>
              <div className={classes.cart_products_item_info_header}>
                <div>
                  <div className={classes.cart_products_item_title}>Smart Go Chocolate</div>
                  <div className={classes.cart_products_item_price}>15 €/5 PV</div>
                </div>
                <div className={classes.cart_products_item_counter}>
                  <span>-</span>
                  <span>2</span>
                  <span>+</span>
                </div>
              </div>
              <div className={classes.cart_products_item_btns}>
                <span className={classes.cart_products_item_heart}>Add to wishlist</span>
                <span className={classes.cart_products_item_delete}>Delete</span>
              </div>
            </div>
          </div>
          <div className={classes.cart_products_item}>
            <img src={fakeBrand} className={classes.cart_products_item_img}></img>
            <div className={classes.cart_products_item_info}>
              <div className={classes.cart_products_item_info_header}>
                <div>
                  <div className={classes.cart_products_item_title}>Smart Go Chocolate</div>
                  <div className={classes.cart_products_item_price}>15 €/5 PV</div>
                </div>
                <div className={classes.cart_products_item_counter}>
                  <span>-</span>
                  <span>2</span>
                  <span>+</span>
                </div>
              </div>
              <div className={classes.cart_products_item_btns}>
                <span className={classes.cart_products_item_heart}>Add to wishlist</span>
                <span className={classes.cart_products_item_delete}>Delete</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className={classes.cart_total}>
          <h2 className={classes.cart_total_title}>Cart totals</h2>
          <div className={classes.cart_total_products_wrp}><span className={classes.cart_total_products}>Products:</span> <span className={classes.cart_total_products}>4 items</span></div>
          <div className={classes.cart_total_price_wrp}>
            <span className={classes.cart_total_price_title}>Total:</span>
            <span className={classes.cart_total_price}>60 €/20 PV</span>
          </div>
          <ButtonDefault className={classes.cart_total_btn} onClick={()=> navigate("/cart/order")} title={"Proceed to check out"}></ButtonDefault>
        </div>

      </div>
    </div>
  )
}

export default CartPage
