import React, { useMemo } from "react"
import ProductItem from "../../../components/ProductItem/ProductItem";
import classes from "./Products.module.scss";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../../../store/actions/catalogActions";
import { useParams } from "react-router-dom";

export const Products = () => {
  const {id} = useParams()
  const dispatcer = useDispatch()
  const products = useSelector(state => state.catalog.products);

  useEffect(() => {
    if(id){
      dispatcer(getProducts(id))
    }

  }, [dispatcer, id])

  const BREADCRUMBS = [
    {
      title: <a href="">Products</a>,
    },
    {
      title: 'Healthy Nutrition & Drinks',
    },
  ]

  const templateProducts = useMemo(()=>{

    return products?.map((product,key)=>{
      return <ProductItem key={key} product={product}/>
    })

  },[products])

  return (
    <div className={classes.wrapper}>
      <Breadcrumbs items={BREADCRUMBS}></Breadcrumbs>
      <h1 className={classes.title}>Healthy Nutrition & Drinks</h1>
      <div className={classes.items}>
        {templateProducts}
      
      </div>
    </div>
  )
}

export default Products
