"use client"

import { faBars, faCircleXmark } from "@fortawesome/free-solid-svg-icons"
import "./navbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import Link from "next/link"


function Navbar() {
  const[activeNav,setactiveNav]=useState("")
  return (
    <nav className={`${activeNav}`}>
      <div className="nav-brand"><span><img src="/images/Crypto.png" width={"150"} alt="" /></span></div>
      <ul className="nav-menu">
        <li><Link href="/">home</Link></li>
        <li><Link href="">news</Link></li>
        <li><Link href="">invest</Link></li>
        <li><Link href="/pages/about">about us</Link></li>
        <li><Link href="/pages/courses">courses</Link></li>
        <li><Link href="/pages/addblog">add blog</Link></li>
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
      

      <Link href={"/pages/admin/addBlog"} className="add-product-btn">create blog</Link>
    </nav>
  )
}

export default Navbar
