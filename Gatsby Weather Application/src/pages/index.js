import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
// import "/home/cabox/workspace/gatsby-hello-world/src/styles/global.css"

export default () => (
  <div id="main">
    <Header headerText="Gatsby Weather App" />
    <Link to="/"><div class="button">Home</div></Link>
    <Link to="/darkabout"><div class="button mx">DarkSky Weather</div></Link>
    <Link to="/openabout"><div class="button">OpenWeather Weather</div></Link>
  </div>
)