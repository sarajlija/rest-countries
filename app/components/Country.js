import React from "react"
import { FaLongArrowAltLeft } from "react-icons/fa"
import { Link, useParams } from "react-router-dom"

function Country() {
  return (
    <div>
      {
        <article className="country">
          <Link style={{ color: "#ffffff" }} to={"/"}>
            <FaLongArrowAltLeft /> Back
          </Link>
          <div className="card-img">
            <img src="https://flagcdn.com/al.svg" alt={name} />
          </div>
          <div className="card-text">
            <h3>
              Name: <span>TEXT</span>
            </h3>
            <h4>
              Population: <span>TEXT</span>
            </h4>
            <h4>
              Region: <span>TEXT</span>
            </h4>
            <h4>
              Capital: <span>TEXT</span>
            </h4>
          </div>
        </article>
      }
    </div>
  )
}

export default Country
