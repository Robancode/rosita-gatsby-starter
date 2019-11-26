import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CssPlayR from "../components/CssPlayR/CssPlayR"
import "../components/CssPlayR/CssPlayR.css"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <>
        <Layout location={this.props.location} title={siteTitle}>
          <SEO
            title="Hello from Rosita"
            keywords={[`blog`, `gatsby`, `javascript`, `react`]}
          />
          <Bio />
        </Layout>
        <CssPlayR />
      </>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
