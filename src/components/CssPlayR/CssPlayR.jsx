import React, { useState } from "react"
import PositionCounter from "./PositionCounter"

const CssPlayR = () => {
  const [position, setPosition] = useState(9)
  return (
    <div className="container">
      <div className="rectangle-side"></div>
      <div className="rectangle-top"></div>
      <div className="diagonal"></div>
      <div className="square-small">
        <PositionCounter
          useHomePage={[position, setPosition]} // Passing a prop with an array with 2 elements
          max={9} // Changing these will override
          min={1} // the defaults in child component
        />
      </div>
      <div className="polygon"></div>
      <div className="circle" style={{ gridRowStart: position || 0 }}></div>
      <div className="footer"></div>
    </div>
  )
}

export default CssPlayR
