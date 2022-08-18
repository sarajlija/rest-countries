import React from "react"
import "../styles/Filter.css"
import { FaSearch } from "react-icons/fa"
function Filter() {
  return (
    <>
      <div className="container">
        <form className="form-control">
          <FaSearch className="icon-search" />
          <input type="search" name="search" id="search" placeholder="Search for a country" />
        </form>
        <select name="select" id="select" className="select">
          <option value="Filter By Region">Filter By Region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </>
  )
}

export default Filter
