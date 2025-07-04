import { useState } from 'react'
import './theme.css'
import video from './assets/Guitar_bg.png'
import facebook from './assets/facebook.svg'
import instagram from './assets/instagram.svg'
import soundcloud from './assets/soundcloud.svg'
import youtube from './assets/youtube.svg'
import linkedin from './assets/linkedin.svg'
function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="main-page">
      <div className="backgroundframe"></div>
      <img className="videoframe" src={video} alt="vid" /> 
      <div className="socialiconsframe">
        <img className="iconposition" src={instagram} alt="ico" /> 
        <img className="iconposition" src={facebook} alt="ico" /> 
        <img className="iconposition" src={soundcloud} alt="ico" /> 
        <img className="iconposition" src={youtube} alt="ico" /> 
        <img className="iconposition" src={linkedin} alt="ico" /> 
      </div>
      <div className="wovnameframe">
        <div className="wovnameposition" >Wolfbard of Veles</div>
      </div> 
    </div>

  )
}

export default App
