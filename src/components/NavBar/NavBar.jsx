import { useState } from 'react'
import './NavBar.css'
import  logo from '../../assets/WOV_logo.PNG' 
function NavBar() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="navbar">
        <img className="voxlogo" src={logo} alt="Wolfbard logo" />
        <ul className="menu menu-horizontal">
          <li><a href="#bio">Bio</a></li>
          <li><a href="#music">Music</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>  <a
                target="_blank"
                rel="noopener noreferrer"
                className="tooltip tooltip-bottom" 
                data-tip="Coming Soon !"
                
              >Shop</a></li>
          <li><a href="#videos">Music Videos</a></li>
        </ul>
      </div>
    </>
  )
}

export default NavBar
