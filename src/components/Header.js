import React from "react"
import Typed from "react-typed"
const Header = () => {
    return (
        
            <div className="header-wraper">
                <div className="main-info">
                    <h1>haide să îl studiem pe</h1>
                    <Typed className="typed-text"
                    strings={["Gauss","Pitagora","L'Hospital","Snake"]}
                    typeSpeed={100}
                    backSpeed={100}
                    loop
                />
                <a href="#" className="btn-main-offer"></a>
                </div>
            </div>
        
    )
}

export default Header
