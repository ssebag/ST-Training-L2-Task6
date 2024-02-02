import './NavBar.css'
import LightLogo from './../../assets/img/Logo.png'
import DarkLogo from './../../assets/img/B-World.png'
import Menu from './../../assets/img/icons/Menu.png'
import Moon from './../../assets/img/icons/moon.png'
import Sun from './../../assets/img/icons/sun.svg'
import Clos from './../../assets/img/icons/clos.svg'
import OpenImg from './../../assets/img/icons/open.png'
import React, { useState, useEffect } from "react"
import NavItem from './NavItem'
export default function NavBar({change}) {
  // ===================== Hook ============================
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(localStorage.getItem("dark") ? localStorage.getItem("dark") : false)
  // ===================== Handle Functions ================
  const Mode =()=>{
      if(dark == "true"){
       setDark("false"); 
      }
      else{setDark("true")
      } 
   } 
   useEffect(() => {
    localStorage.setItem("dark",dark);
    change(dark)
    }, [dark]) 
  const Toggle =()=>{
   setOpen(!open);
  }
  
  return (
    <div className='navBar'>
      <img className='logo' src={dark == "true" ? DarkLogo : LightLogo}  />
      <img className='menu' src={Menu} onClick={Toggle} />

      <div className={`navMainDiv ${open == true ? 'toggle' : ''} `}>
      <img className='clos' src={Clos} onClick={Toggle} />
      <NavItem navClass={"nav-items"}/>
      <div className='mode' onClick={Mode}>
        { dark =='true' ? (
          <>
          <img className='moonIcon' src={Sun} />
          <a className='forWeb'>Light mode</a>
          <a className='forMobile'>Dark mode</a>
          <img className='openImg rotate' src={OpenImg} />
          </>
        ) : (
          <>
          <img className='moonIcon' src={Moon} />
          <a className='forWeb'>Dark mode</a>
          <a className='forMobile'>Dark mode</a>
          <img className='openImg' src={OpenImg} />
          </>
        )}
       </div> 
      </div>
    </div>
  )
}
