import React from "react"
import "../styles/Header.css"
import { FaMoon } from "react-icons/fa"
function Header() {
  return (
    <div className="header">
      <h1>Where in the world</h1>
      <div className="dark-mode">
        <FaMoon style={{ color: "#ffffff", marginRight: "0.6rem", cursor: "pointer" }} />
        <span>dark mode</span>
      </div>
    </div>
  )
}

export default Header
