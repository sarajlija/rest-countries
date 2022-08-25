import React from "react"
import "../styles/Header.css"
import { FaMoon } from "react-icons/fa"
function Header() {
  const changeTheme = () => {
    const header = document.querySelector(".header")
    const container = document.querySelectorAll(".container")
    const grid = document.querySelectorAll(".grid")
    const details = document.querySelectorAll(".details")
    const list = document.querySelectorAll("ul")
    const topLevel = document.querySelectorAll(".top-level")
    const borderDetails = document.querySelectorAll(".border-details")
    const singleCountry = document.querySelectorAll(".single-country")

    details.forEach(detail => {
      detail.classList.toggle("light-theme")
    })

    singleCountry.forEach(ev => {
      ev.classList.toggle("light-theme")
    })
    grid.forEach(ev => {
      ev.classList.toggle("light-theme")
      console.log(ev)
    })

    header.classList.toggle("light-theme")

    list.forEach(ul => {
      ul.classList.toggle("light-theme")
    })
    container.forEach(ev => {
      ev.classList.toggle("light-theme")
    })

    topLevel.forEach(detail => {
      detail.classList.toggle("light-theme")
    })
    borderDetails.forEach(detail => {
      detail.classList.toggle("light-theme")
    })
    document.body.classList.toggle("light-theme")
  }
  return (
    <div className="header">
      <h1>Where in the world</h1>
      <div className="dark-mode" onClick={() => changeTheme()}>
        <FaMoon />
        <span>dark mode</span>
      </div>
    </div>
  )
}

export default Header
