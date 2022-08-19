import React, { useState } from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./styles/main.css"

//Components
import Header from "./components/Header"
import Countries from "./components/Countries"
import Filter from "./components/Filter"
import Country from "./components/Country"

function Main() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={((<Filter />), (<Countries />))} />
        <Route path="/components" element={<Country />} />
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.querySelector("#app"))
root.render(<Main />)

if (module.hot) {
  module.hot.accept()
}
