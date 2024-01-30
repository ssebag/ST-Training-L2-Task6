
import Navbar from './../Nav/NavBar'
import Footer from './../Footer/Footer'
import { useState, useEffect } from "react"
export default function MainLayout({children}) {
    const [dark,setDark]=useState("")
  return (
    <div className={`${dark == "true" ? 'dark' : ''}`}>
     <Navbar change={setDark} />
      {children}
      <Footer /> 
    </div>
  );
}
