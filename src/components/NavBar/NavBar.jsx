import { useState } from 'react'
import './NavBar.css'
import logo from '../../assets/WOV_logo.PNG'
import bio_logo from '../../assets/Wolfbard_of_veles_main_pic.png'
import dimension_of_heart from '../../assets/4th_dimension_of_heart.png'
import hope from '../../assets/hope.PNG'
import looking_at_my_grave from '../../assets/looking_at_my_grave.jpg'
import slav_rock from '../../assets/slav_rock.png'
import too_much_sake from '../../assets/too_much_sake.PNG'
import waltz from '../../assets/waltz.PNG'

function NavBar() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="navbar ">
        <img className="voxlogo" src={logo} alt="Wolfbard logo" />
        <ul className="menu menu-horizontal ">
          <li className="dropdown dropdown-center ">
            <a
              tabIndex={0} role="button" className="bio-button select-none btn btn-xs btn-ghost hover:bg-transparent m-1 cursor-pointer"  >
              Bio
            </a>
            <ul tabIndex={0} className="dropdown-content p-4 shadow glass rounded-box w-5xl">
              <div className="card card-side  ">
                <figure className="pl-2 pt-2 ml-5 mt-3 mb-5">
                  <img
                    src={bio_logo}
                    alt="Album cover"
                    className=" bio-picture opacity-90 w-110 h-110 object-cover rounded-lg mask-16"
                  />
                </figure>
                <div className="card-body ml-5 mt-0 mb-5">
                  <h4 className="card-title text-2xl">
                    Folk <br />
                    DOOM <br />
                    PROG METAL<br /></h4>

                  <p className="bio-text text-[18px] absolute right-18 bottom-25 h-16">
                    I‘m a passionate music producer and guitarist, <br />
                    with a deep-rooted love for crafting soundscapes in <br />
                    the realms of folk, progressive rock, metal and doom<br />
                  </p>
                </div>
              </div>
            </ul>
          </li>
          <li className="dropdown dropdown-center ">
            <a tabindex="0" role="button" className="btn btn-xs btn-ghost hover:bg-transparent m-1"  >
              Music

            </a>
            <ul tabIndex={0} className="dropdown-content p-4 shadow glass rounded-box w-2xl">
              <div className="card card-side  ">
                <figure className="pl-0 pt-2 ml-5 mt-3 mb-5">
                  <a
                    href="https://soundcloud.com/wolfbard_of_veles/4th-dimension-of-heart"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={dimension_of_heart}
                      alt="Album cover"
                      className="bio-picture opacity-90 w-20 h-20 object-cover rounded-md mask-16 "
                    />
                  </a>
                </figure>
                <figure className="pl-2 pt-2 ml-5 mt-3 mb-5">
                  <a
                    href="https://soundcloud.com/wolfbard_of_veles/looking-at-my-grave"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={looking_at_my_grave}
                      alt="Album cover"
                      className="bio-picture opacity-90 w-20 h-20 object-cover rounded-md mask-16"
                    />
                  </a>
                </figure>
                <figure className="pl-2 pt-2 ml-5 mt-3 mb-5">
                  <a
                    href="https://soundcloud.com/wolfbard_of_veles/hope"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={hope}
                      alt="Album cover"
                      className="bio-picture opacity-90 w-20 h-20 object-cover rounded-md mask-16"
                    />
                  </a>
                </figure>
                <figure className="pl-2 pt-2 ml-5 mt-3 mb-5">
                  <a
                    href="https://soundcloud.com/wolfbard_of_veles/too-much-sake"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={too_much_sake}
                      alt="Album cover"
                      className="bio-picture opacity-90 w-20 h-20 object-cover rounded-md mask-16"
                    />
                  </a>
                </figure>
                <figure className="pl-2 pt-2 ml-5 mt-3 mb-5">
                  <a
                    href="https://soundcloud.com/wolfbard_of_veles/waltz"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={waltz}
                      alt="Album cover"
                      className="bio-picture opacity-90 w-20 h-20 object-cover rounded-md mask-16"
                    />
                  </a>
                </figure>
                <figure className="pl-2 pt-2 ml-5 mt-3 mb-5">
                  <a
                    href="https://soundcloud.com/wolfbard_of_veles/slav-rock"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={slav_rock}
                      alt="Album cover"
                      className="bio-picture opacity-90 w-20 h-20 object-cover rounded-md mask-16"
                    />
                  </a>
                </figure>
              </div>


            </ul>

          </li>
          <li className="dropdown dropdown-center "> <a tabindex="0" role="button" className="btn btn-xs btn-ghost hover:bg-transparent m-1"  > Contact</a>
            <ul tabIndex={0}  className="dropdown-content p-4 shadow glass rounded-box w-md h-38">
              <h4 className="card text-2xl text-center">let's get in touch </h4><br/>
              <p className="contact-text text-[18px] text-center">
                unicorndecapitated@gmail.com <br/>
                OR <br/>
                <div
                  role="button"
                  onClick={() => window.open('https://www.linkedin.com/in/michal-baszczyk/', '_blank')}
                  className="cursor-pointer"
                >LinkedIn</div>
                 
              </p>
            </ul>
          </li>
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

