"use client"

import { faBars, faCircleXmark } from "@fortawesome/free-solid-svg-icons"
import "./navbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

function Navbar() {
  const[activeNav,setactiveNav]=useState("")
  return (
    <nav className={`${activeNav}`}>
      <div className="nav-brand"><span>crypto world</span></div>
      <ul className="nav-menu">
        <li><a href="/">home</a></li>
        <li><a href="">news</a></li>
        <li><a href="">invest</a></li>
        <li><a href="">earn money</a></li>
        <li><a href="/pages/courses">courses</a></li>
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
