import React from 'react'
import Navbar from './../Nav/NavBar'
import Footer from './../Footer/Footer'
import MoreInfo from './../moreInfo/MoreInfo'
import { useState, useEffect } from "react"

export default function Information() {
  const [num,setnum]=useState("false")
  return (
    <div className={`${num == "true" ? 'dark' : ''}`} >
      <Navbar change={setnum}/>
      <MoreInfo />
      <Footer /> 
    </div>
  )
}
 