import "semantic-ui-css/semantic.min.css"
import "../styles/overrides.css"
import "../styles/description.css"
import React from "react"
import {useStaticQuery, graphql} from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"

const ProductTemplate = ({ pageContext: { product } }) => {
  const { name, price, description, image } = product;

  const allImages = useStaticQuery(graphql`
  {
    allFile(filter: {sourceInstanceName: {eq: "productImages"}}) {
      edges {
        node {
          name
          publicURL
        }
      }
    }
  }
`);

const nodeData = allImages && allImages.allFile ? allImages.allFile.edges.find(item => item.node.name === product.image) : undefined;
const imageData = nodeData && nodeData.node ? nodeData.node : {}
console.log("🚀 ~ file: product-template.js ~ line 29 ~ ProductTemplate ~ imageData", imageData)

  return (
    <Layout>
      <SEO title="Product page" />
      <div className="product-page__container">
        <div className="product-page__image-container">
          <img src={imageData.publicURL}></img>
        </div>
        <div className="product-page__description">
          <p>{name}</p>
          <p>{description}</p>
          <p>{price}</p>
        </div>
      </div>
    </Layout>
  )
}

export default ProductTemplate
