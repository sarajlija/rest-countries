import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "../styles/Countries.css"
const url = "https://restcountries.com/v2/all"

const Countries = () => {
  const [countries, setCountries] = useState([])
  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch(url)
      const countries = await response.json()
      setCountries(countries)
      console.log(countries)
    }

    fetchCountries()
  }, [])

  // const removeCountry = (numericCode) => {
  //   const newCountry = countries.filter(
  //     (country) => country.numericCode !== numericCode
  //   )
  //   setCountries(newCountry)
  // }
  return (
    <>
      <section className="grid">
        {countries.map(country => {
          const { numericCode, name, population, region, capital, flag } = country
          return (
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
                <Link to={`/country`}>Read more</Link>
              </div>
            </article>
          )
        })}
      </section>
    </>
  )
}

export default Countries
