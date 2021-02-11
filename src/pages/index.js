import 'semantic-ui-css/semantic.min.css'
import '../styles/overrides.css'
import '../styles/description.css'
import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"
import { Card, Image } from 'semantic-ui-react'

import { products } from '../data/products';
import { graphql, useStaticQuery } from 'gatsby'

const IndexPage = () => {

  const data = useStaticQuery(graphql`
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
`)

  return (
    <Layout>
      <SEO title="Home" />

      <div className="site-description">
        <p>Loja em Conselheiro Lafaiete</p>
      </div>

      <Card.Group >
        {products.map(product => {
          const nodeData = data && data.allFile ? data.allFile.edges.find(item => item.node.name === product.image) : undefined;
          const imageData = nodeData && nodeData.node ? nodeData.node : {}
    
          return (
            <Card key={product.id}>
              <Image src={imageData.publicURL} wrapped ui={false} />
              <Card.Content>
                <Card.Header>{product.name}</Card.Header>
                <Card.Description>
                  <p>{product.description} </p>
                  <p>{product.price}</p>
                </Card.Description>
              </Card.Content>
            </Card>
          )
        })}
      </Card.Group >
    </Layout >)
}

export default IndexPage
