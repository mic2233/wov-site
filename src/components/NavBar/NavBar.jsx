import { useState } from 'react'
import './NavBar.css'
import  logo from '../../assets/WOV_logo.PNG' 
function NavBar() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="navbar">
        <img className="voxlogo" src={logo} alt="Wolfbard logo" />
        <ul className="menu">
          <li><a href="#bio">Bio</a></li>
          <li><a href="#music">Music</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#shop">Shop</a></li>
          <li><a href="#videos">Music Videos</a></li>
        </ul>
      </div>
    </>
  )
}

export default NavBar
