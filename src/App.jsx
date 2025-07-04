import { useState } from 'react'
import './theme.css'
import video from './assets/Guitar_bg.png'
function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="main-page">
      <div className="backgroundframe"></div>
      <img className="videoframe" src={video} alt="vid" /> 
    
    </div>

  )
}

export default App
