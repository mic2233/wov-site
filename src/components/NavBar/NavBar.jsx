import { useState } from 'react'
import './NavBar.css'
import logo from '../../assets/WOV_logo.PNG'
import bio_logo from '../../assets/Wolfbard_of_veles_main_pic.png'

function NavBar() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="navbar ">
        <img className="voxlogo" src={logo} alt="Wolfbard logo" />
        <ul className="menu menu-horizontal ">
          <li className="dropdown dropdown-center dropdown-hover">
            <a
              tabIndex={0} role="button" className="btn btn-xs btn-ghost hover:bg-transparent m-1">
                Bio
            </a>
            <ul className="dropdown-content p-4 shadow glass rounded-box w-5xl">
              <div className="card card-side  ">
                <figure className="pl-2 pt-2 ml-5 mt-3 mb-5">
                  <img
                    src={bio_logo}
                    alt="Album cover"
                    className=" bio-picture opacity-90 w-110 h-110 object-cover rounded-lg mask-16"
                  />
                </figure>
                <div className="card-body ml-5 mt-1 mb-5">
                  <h4 className="card-title text-2xl">     
                    Folk <br />
                    DOOM <br />
                    PROG METAL<br /></h4>
   
                  <p className="bio-text text-[18px] absolute right-18 bottom-25 h-16">
                    I ‘m a passionate music producer and guitarist, <br />
                    with a deep-rooted love for crafting soundscapes in <br />
                    the realms of folk, progressive rock, metal and doom<br />
                  </p>
                </div>
              </div>
            </ul>
          </li>
          <li> <a tabindex="0" role="button" className="btn btn-xs btn-ghost hover:bg-transparent m-1"  > Music</a></li>
          <li> <a tabindex="0" role="button" className="btn btn-xs btn-ghost hover:bg-transparent m-1"  > Contact</a></li>
          <li> <a tabindex="0" role="button" className="btn btn-xs btn-ghost hover:bg-transparent m-1 tooltip tooltip-bottom"
            target="_blank"
            rel="noopener noreferrer"
            data-tip="Coming Soon !"> Shop</a></li>
          <li> <a href="https://www.youtube.com/@Wolfbard_Of_Veles/videos" tabindex="0" role="button" className="btn btn-xs btn-ghost hover:bg-transparent m-1"> Music Videos</a></li>
        </ul>
      </div>
    </>
  )
}

export default NavBar

