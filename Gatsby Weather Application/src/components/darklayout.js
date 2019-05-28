import React from "react"

import { StaticQuery, Link, graphql } from "gatsby"

/* import "/home/cabox/workspace/gatsby-starter-weather/src/styles/global.css" */

//import "./src/styles/global.css" 

import "../styles/global.css" 

export default ({ children }) => (
    <StaticQuery
    query={ graphql`
        query {
          weatherData {
            latitude
            longitude
            timezone
            locationName
          currently {
            time
            summary
            icon
            nearestStormDistance
            precipIntensity
            precipProbability
            temperature
            apparentTemperature
            dewPoint
            humidity
            pressure
            windSpeed
            windGust
            windBearing
            cloudCover
            uvIndex
            visibility
            ozone
            }
          }
  }   `
}
  render={data => (
    <div id="main">
      <Link to="/" style={{ float: `right`}}>Home</Link>
      {children}
      <table>
          <tr>
            <th>Summary</th>
            <th>Time</th>
            <th>Latitude | Longitude</th>
            <th>Currently Temperature (F&deg;)</th>
            <th>Currently Apparent Temperature (F&deg;)</th>
            <th>Humidity</th>
            <th>Cloud Cover</th>
          </tr>
          <tr>
            <td>{data.weatherData.currently.summary}</td>
            <td>{data.weatherData.currently.time}</td> 
            <td>{data.weatherData.latitude} | {data.weatherData.longitude}</td>
            <td>{data.weatherData.currently.temperature}&deg;F</td>
            <td>{data.weatherData.currently.apparentTemperature}&deg;F</td>
            <td>{data.weatherData.currently.humidity}</td>
            <td>{data.weatherData.currently.cloudCover}</td>
          </tr>
        </table>
    </div>
  )}
/>
)