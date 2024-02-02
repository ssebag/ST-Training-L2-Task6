import React from 'react'
import {Link} from "react-router-dom"
import './NavBar.css'
export default function NavItem() {
    
  return (
    <>
         <ul className='ulNav'>
           <li>
             <Link to={"/"}>Home</Link>
           </li>
           <li>
             <a>News</a>
           </li>
           <li>
             <a>Promotion of the mount</a>
           </li>
           <li>
              <a>Publishes</a>
           </li>
           <li>
              <a>Subscribe to the newsletter</a>
           </li>
        </ul> 
        
    </>
  )
}
