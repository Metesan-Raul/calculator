import React from "react"
import logo from "../logo.svg";
import Facebook from "./Facebook";
import Vremea from "./Vremea";

const Navbar = () => {
    return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
<div className="container">
  <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo" />Calculator Științific </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#I-IV">I-IV</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#V-VIII">V-VIII</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#IX-XII">IX-XII</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#XII+">XII+</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#jocuri">JOCURI</a>
      </li>
    </ul>
    <div className="facebook"><Facebook></Facebook></div>
    <div className="vremea"><Vremea></Vremea></div>
  </div>
  </div>
</nav>
    )
}

export default Navbar
