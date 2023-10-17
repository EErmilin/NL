import React from "react"
import ProductItem from "../../../components/ProductItem/ProductItem";
import classes from "./Product.module.scss";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs"
import TransitionContainer from "../../../components/TransitionContainer/TransitionContainer"
import { NavLink } from "react-router-dom";

export const Product = () => {
  const BREADCRUMBS = [
    {
      title: <NavLink to="">Products</NavLink>,
    },
    {
      title: <NavLink to="/products">Healthy Nutrition & Drinks</NavLink>,
    },
    {
      title: 'Smart Go Сhocolate',
    },
  ]

  const blocks = [
    {
      title: "Details",
      block: null
    },
    {
      title: "How to use",
      block: null
    },
    {
      title: "Ingredients",
      block: null
    },
    {
      title: "FAQ",
      block: null
    },
    {
      title: "Extra materials",
      block: null
    },

  ]

  return (
    <div className={classes.wrapper}>
      <Breadcrumbs items={BREADCRUMBS}></Breadcrumbs>
      <TransitionContainer
        withTitleBorder={true}
        blocks={blocks}>
      </TransitionContainer>
    </div>
  )
}

export default Product
