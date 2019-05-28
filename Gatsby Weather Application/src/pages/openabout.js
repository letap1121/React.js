import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/openlayout"

export default ({ data }) => (
  <Layout>
    <h1>OpenWeather Weather Data</h1> 
    <p>
      <i>*Using OpenWeather as the weather data source.</i>
    </p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`