import React from "react"
import { Link, useParams } from "react-router-dom"

function Country() {
  const { numericCode, name, flag, population, region, capital } = useParams()
  return (
    <div>
      {
        <article key={numericCode} className="country">
          <div className="card-img">
            <img src={flag} alt={name} />
          </div>
          <div className="card-text">
            <h3>
              Name: <span>{name}</span>
            </h3>
            <h4>
              Population: <span>{population}</span>
            </h4>
            <h4>
              Region: <span>{region}</span>
            </h4>
            <h4>
              Capital: <span>{capital}</span>
            </h4>
          </div>
          <Link style={{ color: "#ffffff" }}>Back</Link>
        </article>
      }
    </div>
  )
}

export default Country
