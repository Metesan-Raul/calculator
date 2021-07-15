import ReactGA from 'react-ga';

function Analytics(){
    ReactGA.initialize("G-CCRLGGSWKD")
    ReactGA.pageview("/HomePage")
    return(<></>);
}
function Initialize(){
    Analytics();
    return(<></>);
}


export default Analytics;