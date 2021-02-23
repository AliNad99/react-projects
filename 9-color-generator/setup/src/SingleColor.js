import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, weight, index, colorsLength}) => {

  
  const [alert, setAlert] = useState(false);

  const bcg = `rgb(${rgb.toString()})`;
  const hex = rgbToHex(rgb[0], rgb[1], rgb[2]).toString();

  const copyHex = () => {
    setAlert(true); 
    navigator.clipboard.writeText(hex)
    const timeout = setTimeout(function () {console.log("hallo"); setAlert(false)}, 2000)
  }

  return (
    <article 
      className={`color ${index > colorsLength/2 && "color-light"}`} 
      style={{backgroundColor: bcg}} 
      onClick={() => copyHex()}
    >

      <p className="percent-value">{weight}% </p>
      <p className="color-value">{bcg}</p>
      <p className="color-value">{hex}</p>

      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  )
}

export default SingleColor
