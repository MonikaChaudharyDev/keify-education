import React from 'react';
import Logo from '../assets/img/logo.png';
import { BrowserRouter as Router, Route, Link,NavLink } from 'react-router-dom';
function Navbar() {
  return (
    
    <div className="header header-light head-shadow">
      <div className="container">
        <nav id="navigation" className="navigation navigation-landscape">
          <div className="nav-header">
            <a classNames="nav-brand" href="#">
              <img src={Logo} className="logo" alt="" />
            </a>
            <div className="nav-toggle"></div>
            <div className="mobile_nav">
              <ul>
                <li>
                  <a href="login.html" className="crs_yuo12 w-auto text-white theme-bg">
                    <span className="embos_45"><i className="fas fa-sign-in-alt mr-1"></i>Sign In</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="nav-menus-wrapper">
            <ul className="nav-menu">
              <li><NavLink to="/tution">Tuition</NavLink></li>
              <li><a href="#">GATE</a></li>
              <li><a href="#">University Exam</a></li>
            </ul>
            
            <ul className="nav-menu nav-menu-social align-to-right">
              
              <li>
               
                <NavLink to="/signup" className="alio_green">
                  <i className="fas fa-sign-in-alt mr-1"></i><span className="dn-lg">Register</span>
                </NavLink>
              </li>
              <li>
                <NavLink to ="/login" className="alio_green">
                  <i className="fas fa-sign-in-alt mr-1"></i><span className="dn-lg">Login</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
    
  )
}

export default Navbar


