"use client"

import React, { useState } from "react"
import Image from "next/image"
import "./Navbar.css"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const applyFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLScvF9FLuBZEP3YGLbDPiHJ_T6x1wNPmBufIaUICBz3h2j-4qQ/viewform?usp=send_form"

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="nav-logo">
          <Image
            src="/loghu.png"
            alt="Harvest Island Logo"
            width={150}
            height={60}
            priority
          />
        </div>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#">About</a>
          <a href="#">Program</a>
          <a href="#">Testimonials</a>
          <a 
            href={applyFormUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="apply-button mobile-only"
          >
            Apply Now
          </a>
        </div>

        <a 
          href={applyFormUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="apply-button desktop-only"
        >
          Apply Now
        </a>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar