import { useState } from 'react'
import './NavBar.css'
import  logo from '../../assets/WOV_logo.PNG' 
function NavBar() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="navbar ">
        <img className="voxlogo" src={logo} alt="Wolfbard logo" />
        <ul className="menu menu-horizontal ">
          <li> <a tabindex="0" role="button" className="btn btn-xs btn-ghost hover:bg-transparent m-1"  > Bio</a></li>
          <li> <a tabindex="0" role="button" className="btn btn-xs btn-ghost hover:bg-transparent m-1"  > Music</a></li>
          <li> <a tabindex="0" role="button" className="btn btn-xs btn-ghost hover:bg-transparent m-1"  > Contact</a></li>
          <li> <a tabindex="0" role="button" className="btn btn-xs btn-ghost hover:bg-transparent m-1"  > Shop</a></li>
          <li> <a  tabindex="0" role="button" className="btn btn-xs btn-ghost hover:bg-transparent m-1 tooltip tooltip-bottom "
                target="_blank"
                rel="noopener noreferrer"
                data-tip="Coming Soon !"
              > Shop</a></li>
          <li><a href="https://www.youtube.com/@Wolfbard_Of_Veles/videos">Music Videos</a></li>
        </ul>
      </div>
    </>
  )
}

export default NavBar
