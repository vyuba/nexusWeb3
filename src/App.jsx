// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// import Loader from "./components/Loader"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"


function App() {

  return (
    <>
      <div>
        {/* <Loader/> */}
        <Navbar/>
        <div className="pt-32">
        <Home/>
        <Footer/>
        </div>
      </div>
    </>
  )
}

export default App
