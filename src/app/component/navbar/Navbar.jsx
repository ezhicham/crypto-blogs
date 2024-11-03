"use client"

import { faBars, faCircleXmark } from "@fortawesome/free-solid-svg-icons"
import "./navbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"


function Navbar() {
  const[activeNav,setactiveNav]=useState("")
  return (
    <nav className={`${activeNav}`}>
      <div className="nav-brand"><span><img src="/images/Crypto.png" width={"150"} alt="" /></span></div>
      <ul className="nav-menu">
        <li><a href="/">home</a></li>
        <li><a href="">news</a></li>
        <li><a href="">invest</a></li>
        <li><a href="/pages/about">about us</a></li>
        <li><a href="/pages/courses">courses</a></li>
        <li><a href="/pages/addblog">add blog</a></li>
      </ul>

      <div className="login">
        <button>login/register</button>
      </div>
      <div className="nav-icon" onClick={() => {
        setactiveNav(activeNav=="active"?"":"active")
      }
      }>
        
        {activeNav=="" ? <FontAwesomeIcon className="active-icon" width={"25"} icon={faBars} />:<FontAwesomeIcon className="close" width={"25"} icon={faCircleXmark} />}
    
      </div>
      
    </nav>
  )
}

export default Navbar
