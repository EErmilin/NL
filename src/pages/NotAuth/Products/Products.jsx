import React from "react"
import ProductItem from "../../../components/ProductItem/ProductItem";
import classes from "./Products.module.scss";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs"

export const Products = () => {
  const BREADCRUMBS = [
    {
      title:<a href="">Products</a> ,
    },
    {
      title: 'Healthy Nutrition & Drinks',
    },
  ]

  return (
    <div className={classes.wrapper}>
       <Breadcrumbs items={BREADCRUMBS}></Breadcrumbs>
      <h1 className={classes.title}>Healthy Nutrition & Drinks</h1>
      <div className={classes.items}>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </div>
  )
}

export default Products
