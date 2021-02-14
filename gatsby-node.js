/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const products = require('./src/data/products');
const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    products.forEach(product => {
    console.log("🚀 ~ file: gatsby-node.js ~ line 48 ~ exports.createPages= ~ product", product)
        createPage({
            path: product.slug,
            component: path.resolve(`./src/templates/product-template.js`),
            context: {
                product
            }
        })
    })
  }