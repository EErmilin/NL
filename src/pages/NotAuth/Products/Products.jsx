import React, { useMemo } from "react"
import ProductItem from "../../../components/ProductItem/ProductItem";
import classes from "./Products.module.scss";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../../../store/actions/catalogActions";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

export const Products = () => {
  const {id} = useParams()
  const dispatcer = useDispatch()
  const products = useSelector(state => state.catalog.products);
  const categories = useSelector(state => state.catalog.categories);

  const categorie = categories&& categories.length && categories.find((categorie)=> categorie.id==Number(id))


  useEffect(() => {
    if(id){
      dispatcer(getProducts(id))
    }

  }, [dispatcer, id])

  const BREADCRUMBS = [
    {
      title: "Products",
    },
    {
      title: categorie?.name,
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
      <h1 className={classes.title}>{categorie?.name}</h1>
      <div className={classes.items}>
        {templateProducts}
      </div>
    </div>
  )
}

export default Products
