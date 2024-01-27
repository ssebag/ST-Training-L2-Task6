import './NavBar.css'
import LightLogo from './../../assets/img/Logo.png'
import DarkLogo from './../../assets/img/B-World.png'
import Menu from './../../assets/img/icons/Menu.png'
import Moon from './../../assets/img/icons/moon.png'
import Sun from './../../assets/img/icons/sun.svg'
import Clos from './../../assets/img/icons/clos.svg'
import OpenImg from './../../assets/img/icons/open.png'
import {Link} from "react-router-dom"
import React, { useState, useEffect } from "react"

export default function NavBar({change}) {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(localStorage.getItem("dark") ? localStorage.getItem("dark") : false)
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
  let lists=[
    {list:"Home", link:"/"},
    {list:"News", link:""},
    {list:"Promotion of the mount", link:""},
    {list:"Publishes", link:""},
    {list:"Subscribe to the newsletter", link:""},
  ]
  return (
    <div className='navBar'>
      <img className='logo' src={dark == "true" ? DarkLogo : LightLogo}  />
      <img className='menu' src={Menu} onClick={Toggle} />

      <div className={`navMainDiv ${open == true ? 'toggle' : ''} `}>
      <img className='clos' src={Clos} onClick={Toggle} />
        <ul className='ulNav'>
          {lists?.map((ele,key)=>{
            return(<li key={key}><Link to={ele?.link}>{ele?.list}</Link></li>)
          })}
        </ul>  
        <div className='mode' onClick={Mode}>
          <img className='moonIcon' src={dark   == "true" ? Sun : Moon} />
          <a>{dark   == "true" ? 'Light mode' : 'Dark mode'}</a>
         <img className={`openImg ${dark == "true" ? 'rotate' : '' }`} src={OpenImg} />
        </div>  
      </div>
    </div>
  )
}
