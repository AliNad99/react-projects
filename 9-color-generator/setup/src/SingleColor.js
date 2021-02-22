import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, weight, index}) => {

  
  const [alert, setAlert] = useState(false);

  const bcg = `rgb(${rgb.toString()})`;
  const hex = rgbToHex(rgb[0], rgb[1], rgb[2]);

  return (
    <article className={`color ${index > 10 && "color-light"}`} style={{backgroundColor: bcg}}>
      <p className="percent-value">{weight}% </p>
      <p className="color-value">{bcg}</p>
      <p className="color-value">{hex}</p>
    </article>
  )
}

export default SingleColor
