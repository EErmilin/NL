import React, { useMemo } from "react"
import { useTranslation } from "react-i18next";
import classes from "./ProductsMenu.module.scss";
import fakeBrand from '../../../../assets/img/fakeBrand.png';
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getCurrentCategorie } from "../../../../store/actions/catalogActions";
import { useQuery } from "@tanstack/react-query";
import axiosCustom from "../../../../axios/axiosCustom";


export const ProductsMenu = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const dispatcher = useDispatch()

  const [categorie, setCategorie] = useState(null)
  const [categorieId, setCategorieId] = useState(null)
  const locale = useSelector(state => state.router.locale);
  const backUrl = "https://testapi.eu-nl.com"

  const categories = useSelector(state => state.catalog.categories);

  const { data, isInitialLoading, isError } = useQuery([`categorie${categorieId}`, { categorieId: categorieId }], () =>
  axiosCustom(`${backUrl}/api/v1/descendant-categories?parent_id=${categorieId}`, {id:categorieId})
);



  /** Масив ссылок */
  const templateLinks = useMemo(() => {
    return categories?.map((elem, id) => {
      if (elem.slug === "root") {
        return

      }

      if (elem.slug === "new-arrivals") {
        return <div className={classes.link} > <NavLink to={`/products/${elem.id}`} className={classes.link}>{elem.name}</NavLink></div>

      }
      if (elem.slug === "special-offers") {
        return <div className={classes.link}> <NavLink to={`/products/${elem.id}`} className={classes.link}>{elem.name}</NavLink></div>

      }
      if (elem.slug === "bestsellers") {
        return <div className={classes.link}> <NavLink to={`/products/${elem.id}`} className={classes.link}>{elem.name}</NavLink></div>

      }
      return (
        <div
          className={classes.categorie}
          key={id}
          onMouseEnter={() => {setCategorieId(elem.id); setCategorie(true)}}
          onClick={() => navigate(`/products/${elem.id}`)}
        >
          {elem.name}
        </div>
      )
    })
  }, [categories, locale])


  /** Масив ссылок */
  const templateBrands = useMemo(() => {
    let arrLinks = []
    arrLinks = [
      { link: "/products/1", title: t("Smart Go") },
      { link: "/products/1", title: t("Greenflash") },
      { link: "/products/1", title: t("Lorimer") },
      { link: "/products/1", title: t("Occuba") },
      { link: "/products/1", title: t("TenX") },
      { link: "/products/1", title: t("Fineffect") },
      { link: "/products/1", title: t("and others") },
    ]
    return arrLinks.map((elem, id) => {
      return (

        <div className={classes.brand}>
          <NavLink

            key={id}
            to={elem.link}
          >
            {elem.title}
          </NavLink>
        </div>
      )
    })
  }, [])

  const templateCategorie = data?.data?.data?.map((item, key) => {
    return <div key={key} className={categorie ? classes.categorie_current : classes.categorie_current} onClick={() => navigate(`/products/${item.id}`)}>{item.name}</div>
  })

  return (
    <div className={classes.ProductsMenu}>
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <div>
            <div className={classes.title} onClick={() => setCategorie(null)}>Categories</div>

            {templateLinks}
          </div>

        </div>
        {!categorie ?
          <div className={classes.menu}>
            <div>
              <div className={classes.title} onClick={() => setCategorie(null)}>Brands</div>
              {templateBrands}</div>
            <div>  <img className={classes.img} src={fakeBrand} /></div>
          </div> :
          <div className={classes.menu_white}>
            <div className={classes.menu_white_items}> {templateCategorie}</div>
            <div>  <img className={classes.img} src={fakeBrand} /></div>
          </div>
        }
      </div>
    </div>
  )
}

export default ProductsMenu
