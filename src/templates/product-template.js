import "../styles/product-page.css"
import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"

const ProductTemplate = ({ pageContext: { product } }) => {
console.log("🚀 ~ file: product-template.js ~ line 9 ~ ProductTemplate ~ product", product)
  const { name, price, description, image, size, tamanho } = product;
  console.log("🚀 ~ file: product-template.js ~ line 10 ~ ProductTemplate ~ size", size)

  return (
    <Layout>
      <SEO title="Product page" />
      <div className="product-page__container">
        <div className="product-page__image-container">
          <img src={image}></img>
        </div>
        <div className="product-page__description">
          <p>{name}</p>
          <p>{description}</p>
          <p><span>Tamanho: </span>{size || tamanho}</p>
          <p>{price}</p>
        </div>
      </div>
    </Layout>
  )
}

export default ProductTemplate
