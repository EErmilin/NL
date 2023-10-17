import React, { useMemo } from "react"
import { useTranslation } from "react-i18next";
import classes from "./ProductsMenu.module.scss";
import fakeBrand from '../../../../assets/img/fakeBrand.png';
import { NavLink } from "react-router-dom";


export const ProductsMenu = () => {
  const { t } = useTranslation()

  /** Масив ссылок */
  const templateLinks = useMemo(() => {
    let arrLinks = []
    arrLinks = [
      { link: "/products", title: t("Best Sellers") },
      { link: "/products", title: t("Food Supplements") },
      { link: "/products", title: t("Skincare") },
      { link: "/products", title: t("Haircare") },
      { link: "/products", title: t("Laundry & Household") },
    ]
    return arrLinks.map((elem, id) => {
      let activePage = null//url.pathname
      return (
        <NavLink
          className={[(activePage == elem.link ? classes.active : classes.categorie)].join(' ')}
          key={id}
          to={elem.link}
        >
          {elem.title}
        </NavLink>
      )
    })
  }, [])

  /** Масив ссылок */
  const templateBrands = useMemo(() => {
    let arrLinks = []
    arrLinks = [
      { link: "/products", title: t("Smart Go") },
      { link: "/products", title: t("Greenflash") },
      { link: "/products", title: t("Lorimer") },
      { link: "/products", title: t("Occuba") },
      { link: "/products", title: t("TenX") },
      { link: "/products", title: t("Fineffect") },
      { link: "/products", title: t("and others") },
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


  return (
    <div className={classes.wrapper}>
      <div>
        <div className={classes.title}> <NavLink to="/products" className={classes.title}>Categories</NavLink></div>
        <div className={classes.link}> <NavLink to="/products" className={classes.link}>New Arrivals</NavLink></div>
        <div className={classes.link}> <NavLink to="/products" className={classes.link}>Special Offers</NavLink></div>
        <div className={classes.link}> <NavLink to="/products" className={classes.link}>Best Sellers</NavLink></div>
        {templateLinks}
      </div>
      <div>
        <div className={classes.title}>Brands</div>
        {templateBrands}
      </div>
      <img className={classes.img} src={fakeBrand} />
    </div>
  )
}

export default ProductsMenu
