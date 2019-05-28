import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/darklayout"
import Header from "../components/header"

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default ({ data }) => (
  <Layout>
    <Header headerText="DarkSky Weather Data" />    
    <p>
      <i>*Using DarkSky as the weather data source.</i>
    </p>
  </Layout>
)
