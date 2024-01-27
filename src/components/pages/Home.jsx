import React from 'react'
import Navbar from './../Nav/NavBar'
import Hero from './../Hero/Hero'
import SelectedSec from './../SelectedSec/SelectedSec'
import Subscribe from './../Subscribe/Subscribe'
import Footer from './../Footer/Footer'
import { useState, useEffect } from "react"
 
export default function Home() {
 const [dark,setDark]=useState("")
  return (
    <div className={`${dark == "true" ? 'dark' : ''}`} >
        <Navbar change={setDark} />
        <Hero />
        <SelectedSec />
        <Subscribe />
        <Footer /> 
    </div>
  )
}
