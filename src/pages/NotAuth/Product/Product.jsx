import React from "react"
import classes from "./Product.module.scss";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs"
import TransitionContainer from "../../../components/TransitionContainer/TransitionContainer"
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../../store/actions/catalogActions";
import { useEffect } from "react";
import RecommendedProducts from "./components/RecommendedProducts/RecommendedProducts";
import ButtonDefault from "../../../components/UI/btns/Button/Button";

export const Product = () => {
  const dispatcer = useDispatch()
  const product = useSelector(state => state.catalog.product);
  const { id } = useParams()

  useEffect(() => {
    if (id) {
      dispatcer(getProduct(id))
    }
  }, [dispatcer, id])


  const BREADCRUMBS = [
    {
      title: <NavLink to="">Products</NavLink>,
    },
    {
      title: <NavLink to="/products">Healthy Nutrition & Drinks</NavLink>,
    },
    {
      title: product?.name,
    },
  ]


  if (!product) return null

  const blocks = [
    {
      title: "Details",
      block: <div dangerouslySetInnerHTML={{ __html: product.add_info }}></div>
    },
    {
      title: "How to use",
      block: <div dangerouslySetInnerHTML={{ __html: product.how_to_use }}></div>
    },
    {
      title: "Ingredients",
      block: <div dangerouslySetInnerHTML={{ __html: product.ingredients }}></div>
    },
    {
      title: "FAQ",
      block: <div dangerouslySetInnerHTML={{ __html: product.question_and_answer }}></div>
    },
    {
      title: "Extra materials",
      block: <div dangerouslySetInnerHTML={{ __html: product.add_info }}></div>
    },

  ]

  return (
    <div className={classes.wrapper}>
      <Breadcrumbs items={BREADCRUMBS}></Breadcrumbs>

      <div className={classes.product}>
        <div className={classes.photos}>
          <img src={product.images[0].original_image_url} className={classes.photos_main}></img>
        </div>
        <div className={classes.product_info}>
          <div className={classes.product_name}>{product.name}</div>
          <div className={classes.product_price}>{Number(product.price).toFixed(0)} €</div>
          <div className={classes.product_made}>Made in {product.made_in}</div>
          <div dangerouslySetInnerHTML={{ __html: product.short_description }} className={classes.product_description}></div>
          <div><ButtonDefault className={classes.product_info_btn} title={'Add to cart'} /></div>
          <div className={classes.product_notification}>This product is manufactured in a facility that processes other products, which may contain eggs, gluten, celery, fish and nuts.</div>
        </div>
      </div>
      <TransitionContainer
        classNameTitlesWrap={classes.block_titles}
        withTitleBorder={true}
        blocks={blocks}>
      </TransitionContainer>
      <RecommendedProducts />
    </div>
  )
}

export default Product
