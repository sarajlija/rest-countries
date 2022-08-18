import React, { useState } from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Route } from "react-router-dom"
import "./styles/main.css"

//Components
import Header from "./components/Header"
import Countries from "./components/Countries"

function Main() {
  return (
    <>
      {/*<Header />*/}
      <Countries />
    </>
  )
}

const root = ReactDOM.createRoot(document.querySelector("#app"))
root.render(<Main />)

if (module.hot) {
  module.hot.accept()
}
