import 'semantic-ui-css/semantic.min.css'
import '../styles/overrides.css'
import '../styles/description.css'
import products from '../data/products';
import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"
import { Card, Image } from 'semantic-ui-react'

import { Link } from 'gatsby'

const IndexPage = () => {

  return (
    <Layout>
      <SEO title="Home" />

      <div className="site-description">
        <p>O Fino do Brechó uma loja de requinte nos tempos modernos onde tudo deve ser reaproveitado e reciclado. Trabalhamos para servir as pessoas que sonham em adquirir peças de grifes famosas e de qualidade com valor acessível para todos os bolsos.</p>
      </div>

      <Card.Group >
        {products.map(product => {
          return (
            <Card key={product.id}>
              <Link to={product.slug}>
              <Image src={product.image} wrapped ui={false} />
              <Card.Content>
                <Card.Header>{product.name}</Card.Header>
                <Card.Description>
                  <p>{product.description} </p>
                  <p>{product.price}</p>
                </Card.Description>
              </Card.Content>
              </Link>
            </Card>
          )
        })}
      </Card.Group >
    </Layout >)
}

export default IndexPage
