import { useState } from 'react'
import './theme.css'
import video from './assets/bacground-video.mov'
import spotify from './assets/spotify.svg'
import instagram from './assets/instagram.svg'
import soundcloud from './assets/soundcloud.svg'
import youtube from './assets/youtube.svg'
import linkedin from './assets/linkedin.svg'
function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="main-page">
      <div className="backgroundframe"></div>
      <video
        className="videoframe"
        src={video}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="socialiconsframe">


  <a href="https://soundcloud.com/wolfbard_of_veles"      target="_blank" rel="noopener noreferrer">
    <img className="icon" src={soundcloud} alt="SoundCloud" />
  </a>

  <a href="https://www.youtube.com/@Wolfbard_Of_Veles"    target="_blank" rel="noopener noreferrer">
    <img className="icon" src={youtube}    alt="YouTube"   />
  </a>

  <a href="https://www.linkedin.com/in/michal-baszczyk/" target="_blank" rel="noopener noreferrer">
    <img className="icon" src={linkedin}   alt="LinkedIn"  />
  </a>
  <a
    target="_blank"
    rel="noopener noreferrer"
    className="tooltip"
    data-tip="Soon on Spotify!"
  >
    <img src={spotify} alt="Spotify" className="icon" />
  </a>
      </div>
      <div className="wovnameframe">
        <div className="wovnameposition" >Wolfbard of Veles</div>
      </div> 
    </div>

  )
}

export default App
