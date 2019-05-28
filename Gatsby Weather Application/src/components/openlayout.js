import React from "react"

import { StaticQuery, Link, graphql } from "gatsby"

/* import "/home/cabox/workspace/gatsby-starter-weather/src/styles/global.css" */

// import "./src/styles/global.css" 

import "../styles/global.css" 

export default ({ children }) => (
    <StaticQuery
    query={graphql`
      query {
        openWeather {
          coord {
            lon
            lat
          }
          visibility
          main {
            temp
            pressure
            humidity
          }
          dt
          wind {
            speed
            deg
          }
          name
        }
      }`
}
  render={data => (
  <div id="main">
    <Link to="/" style={{ float: `right`}}>Home</Link>
    {children}
        {/* <Link to="/">Home    </Link>  */}
     <table>
          <tr>
            <th>City</th>
            <th>Latitude | Longitude</th>
            <th>DT</th>
            <th>Temperature (F&deg;)</th>
            <th>Humidity</th>
            <th>Visibility</th>
          </tr>
          <tr>
            <td>{data.openWeather.name}</td>
            <td>{data.openWeather.coord.lat} | {data.openWeather.coord.lon}</td>
            <td>{data.openWeather.dt}</td>
            <td>{data.openWeather.main.temp}</td>
            <td>{data.openWeather.main.humidity}%</td>
            <td>{data.openWeather.visibility}</td>
          </tr>
        </table>
    </div>
    )}
  />
)