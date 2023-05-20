import React from 'react'
import "./App.css"
import axios from 'axios'
import { useState, useEffect } from 'react'
import Main from './Main/Main'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Browse from './Browse/Browse'
import Details from './Details/Details'
function App() {
  const [games, setGames] = useState([])
  const [games2, setGames2] = useState([])

  useEffect(() => {
    axios.get("https://prickly-lowly-metacarpal.glitch.me/popular")
      .then(data =>  setGames(data.data))
    axios.get("https://prickly-lowly-metacarpal.glitch.me/browse")
      .then(data => setGames2(data.data))
  }, [])

  return (
    <>
      <Header />
      <Main games={games} />
      <Browse games2={games2} />
      <Details/>
      <Footer />
    </>
  )
}

export default App