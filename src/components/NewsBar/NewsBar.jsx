import { useState } from 'react'
import './NewsBar.css'
import  star from '../../assets/Star.svg' 
function NewsBar() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="newsbar">
        <div className="newstext">NEW SINGLE_</div>
        <img className="voxlogo" src={star} alt="star" />

        <div className="newstext">NEW SINGLE_</div>
        <img className="voxlogo" src={star} alt="star" />

        <div className="newstext">NEW SINGLE_</div>
        <img className="voxlogo" src={star} alt="star" />

        <div className="newstext">NEW SINGLE_</div>
        <img className="voxlogo" src={star} alt="star" />

        <div className="newstext">NEW SINGLE_</div>

      </div>
    </>
  )
}

export default NewsBar
