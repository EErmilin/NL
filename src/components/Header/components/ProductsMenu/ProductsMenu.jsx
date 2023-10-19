import React, { useMemo } from "react"
import { useTranslation } from "react-i18next";
import classes from "./ProductsMenu.module.scss";
import fakeBrand from '../../../../assets/img/fakeBrand.png';
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getCurrentCategorie } from "../../../../store/actions/catalogActions";


export const ProductsMenu = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const dispatcher = useDispatch()

  const [categorie, setCategorie] = useState(null)


  const categories = useSelector(state => state.catalog.categories);

  const getCategorie = async (id) => {
    const response = await dispatcher(getCurrentCategorie(id))
    setCategorie(response)
  }

  /** Масив ссылок */
  const templateLinks = useMemo(() => {
    return categories?.map((elem, id) => {
      let activePage = null//url.pathname
      console.log(elem.slug === "new-arrivals")
      console.log(elem)
      if (elem.slug === "root") {
        return

      }

      if (elem.slug === "new-arrivals") {
        return <div className={classes.link}> <NavLink to={`/products/${elem.id}`} className={classes.link}>New Arrivals</NavLink></div>

      }
      if (elem.slug === "special-offers") {
        return <div className={classes.link}> <NavLink to={`/products/${elem.id}`} className={classes.link}>Special Offers</NavLink></div>

      }
      if (elem.slug === "bestsellers") {
        return <div className={classes.link}> <NavLink to={`/products/${elem.id}`} className={classes.link}>BestSellers</NavLink></div>

      }
      return (
        <div
          className={classes.categorie}
          key={id}
          onClick={() => getCategorie(elem.id)}
        >
          {elem.name}
        </div>
      )
    })
  }, [categories])





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

  const templateCategorie = categorie?.map((item, key) => {
    return <div key={key} className={categorie ? classes.categorie_current :classes.categorie_current} onClick={()=>navigate(`/products/${item.id}`)}>{item.name}</div>
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
