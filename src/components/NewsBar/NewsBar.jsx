import { useState } from 'react'
import './NewsBar.css'
import  star from '../../assets/Star.svg' 
function NewsBar() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="newsbar">
        <div className="ticker">
        <span className="scroll">
          <div className="newstext">NEW SINGLE</div>
          <img className="starlogo" src={star}alt="star" />
          <div className="newstext">NEW SINGLE</div>
          <img className="starlogo" src={star}alt="star" />
          <div className="newstext">NEW SINGLE</div>
          <img className="starlogo" src={star}alt="star" />
          <div className="newstext">NEW SINGLE</div>
          <img className="starlogo" src={star}alt="star" />
          <div className="newstext">NEW SINGLE</div>
          <img className="starlogo" src={star}alt="star" />
          <div className="newstext">NEW SINGLE</div>
          <img className="starlogo" src={star}alt="star" />
          <div className="newstext">NEW SINGLE</div>
          <img className="starlogo" src={star}alt="star" />
        </span>
          <span className="scroll" aria-hidden="true" >
          <div className="newstext">NEW SINGLE</div>
          <img className="starlogo" src={star}alt="star" />
          <div className="newstext">NEW SINGLE</div>
          <img className="starlogo" src={star}alt="star" />
          <div className="newstext">NEW SINGLE</div>
          <img className="starlogo" src={star}alt="star" />
          <div className="newstext">NEW SINGLE</div>
          <img className="starlogo" src={star}alt="star" />
          <div className="newstext">NEW SINGLE</div>
          <img className="starlogo" src={star}alt="star" />
          <div className="newstext">NEW SINGLE</div>
          <img className="starlogo" src={star}alt="star" />
          <div className="newstext">NEW SINGLE</div>
          <img className="starlogo" src={star}alt="star" />
        </span>
        </div>
      
      </div>
    </>
  )
}

export default NewsBar
