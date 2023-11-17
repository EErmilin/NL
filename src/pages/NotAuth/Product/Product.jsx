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
import ReactPlayer from 'react-player/lazy'
import ExpandBlock from "../../../components/ExpandBlock/ExpandBlock";
import 'react-fancybox/lib/fancybox.css'
import Fancybox from "../../../components/Fancybox/Fancybox";
import ImagesSlider from "./components/ImagesSlider/ImagesSlider";
import { addProduct } from "../../../store/actions/orderActions";
import { SHOW_CARD } from "../../../store/actions/actionsType";
import { setIsShowCart } from "../../../store/actions/routerActions";
import { useState } from "react";
import { formatedSum } from "../../../functions/functions";

export const Product = () => {

  const dispatcher = useDispatch()
  const product = useSelector(state => state.catalog.product);
  const { id } = useParams()
  const isShowCart = useSelector(state => state.router.isShowCart);

  const [mainImg, setMainImg] = useState(null)

  useEffect(() => {
    if (id) {
      dispatcher(getProduct(id))
    }
  }, [dispatcher, id])

  useEffect(() => {
    if (product) {
      setMainImg(product.images[0])
    }
  }, [product])



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
      block: <div className={classes.html} dangerouslySetInnerHTML={{ __html: product.description }}></div>
    },
    {
      title: "How to use",
      block: <div className={classes.html} dangerouslySetInnerHTML={{ __html: product.how_to_use }}></div>
    },
    {
      title: "Ingredients",
      block: <><div className={classes.html} dangerouslySetInnerHTML={{ __html: product.ingredients }}></div><div className={classes.html} dangerouslySetInnerHTML={{ __html: product.nutritional_value }} /></>
    },
    {
      title: "FAQ",
      block: <div className={classes.html} dangerouslySetInnerHTML={{ __html: product.question_and_answer }}></div>
    },
    {
      title: "Extra materials",
      block: <div>
        <ExpandBlock title={'Presentation'}> </ExpandBlock>
        <ExpandBlock title={'Product guide'}> </ExpandBlock>
        <ExpandBlock title={'Images & videos'}>{product?.videos?.length ? product.videos.map((video) => <ReactPlayer url={video.url} controls={true} />) : null}  </ExpandBlock>

      </div>
    },

  ]

  const photos = product.images.map((photo, key) => {
    return <div onClick={()=>setMainImg(photo)} key={key}>
      <img alt="" className={mainImg===photo? classes.img_selected : classes.img} src={photo.url} />
      </div>
  })

  const toggleAddProduct = () => {
    dispatcher(addProduct(product.id))
    !isShowCart && dispatcher(setIsShowCart(true))
  }

  return (
    <div className={classes.wrapper}>

      <Breadcrumbs items={BREADCRUMBS}></Breadcrumbs>

      <div className={classes.product}>
        <div className={classes.photos}>

          <Fancybox>
            {product.images.length > 1 && <ImagesSlider slidesPerView={4} photos={photos} />}
            <a data-fancybox="gallery" href={mainImg?.url} className={classes.photos_main}>
              <img src={mainImg?.url}></img>
            </a>
          </Fancybox>

        </div>
        <div className={classes.product_info}>
          <div className={classes.product_name}>{product.name}</div>
          <div className={classes.product_price}>{formatedSum(product.price)}<span className={classes.product_price_pv}>{product.pv ? "/" + Number(product.pv) + " PV" : null}</span></div>
          <div className={classes.product_made}>Made in {product.made_in}</div>
          <div dangerouslySetInnerHTML={{ __html: product.short_description }} className={classes.product_description}></div>
          <div><ButtonDefault className={classes.product_info_btn} onClick={toggleAddProduct} title={'Add to cart'} /></div>
          {product.add_info && <div className={classes.product_notification} dangerouslySetInnerHTML={{ __html: product.add_info }}></div>}
        </div>
      </div>
      <TransitionContainer
        classNameTitlesWrap={classes.block_titles}
        classNameBody={classes.block_wrp}
        withTitleBorder={true}
        blocks={blocks}>
      </TransitionContainer>
    {product.recommended_products && product.recommended_products.length  ?  <RecommendedProducts products={product.recommended_products} />: null}
    </div>
  )
}

export default Product
