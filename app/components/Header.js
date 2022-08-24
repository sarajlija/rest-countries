import React from "react"
import "../styles/Header.css"
import { FaMoon } from "react-icons/fa"
function Header() {
  const changeTheme = () => {
    const header = document.querySelector(".header")
    const details = document.querySelectorAll(".details")
    const list = document.querySelectorAll("ul")
    const topLevel = document.querySelectorAll(".top-level")

    details.forEach(detail => {
      detail.classList.toggle("light-theme")
    })
    header.classList.toggle("light-theme")
    list.forEach(ul => {
      ul.classList.toggle("light-theme")
    })
    topLevel.forEach(detail => {
      detail.classList.toggle("light-theme")
    })
    document.body.classList.toggle("light-theme")
  }
  return (
    <div className="header">
      <h1>Where in the world</h1>
      <div className="dark-mode" onClick={() => changeTheme()}>
        <FaMoon style={{ color: "#ffffff", marginRight: "0.6rem", cursor: "pointer" }} />
        <span>dark mode</span>
      </div>
    </div>
  )
}

export default Header
