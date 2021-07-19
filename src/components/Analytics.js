import ReactGA from 'react-ga';
import React from 'react'

const Analytics = () => {
    ReactGA.initialize("G-CCRLGGSWKD")
    ReactGA.pageview("/HomePage")  
    return (
        <div>
        </div>
    )
}

export default Analytics;