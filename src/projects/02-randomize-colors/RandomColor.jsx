import React from 'react'

function RandomColor() {
  const buttonStyle = {
    padding : "10px 15px",
    border : "none",
    fontSize : "24px",
    backgroundColor : "#464464",
    color : "#efefef"
  }
  const handleColor = () => {
    let clr = "#"
    const letters = "0123456789ABCDEF"
    for (let i = 0; i < 6; i++) {
      clr += letters[Math.floor(Math.random() * 16)]
    }
    console.log(clr)
    document.body.style.background = clr
  }
  return (
    <div className='d-flex container '>
      <button onClick={handleColor} style={buttonStyle}>Change Color</button>
    </div>
  )
}

export default RandomColor