import React from 'react'
import "./App.css"
import axios from 'axios'
import { useState, useEffect } from 'react'
import Main from './Main/Main'
// import Header from './Header/Header'
// import Footer from './Footer/Footer'
import Browse from './Browse/Browse'
import Details from './Details/Details'
import Stream from './Stream/Stream'
import Profile from './Profile/Profile'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout'
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

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Main games={games}/>}/>
        <Route path='/browse' element={<Browse games2={games2}/>}/>
        <Route path='/details' element={<Details/>}/>
        <Route path='/stream' element={<Stream/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
      {/* <Header /> */}
      {/* <Main games={games} />
      <Browse games2={games2} />
      <Details/> */}
      {/* <Footer /> */}
    </>
  )
}

export default App