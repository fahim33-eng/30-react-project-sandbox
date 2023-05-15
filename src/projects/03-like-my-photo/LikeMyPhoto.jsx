import React, { useState } from 'react'
import {
    AiFillSmile,
    AiFillHeart,
    AiOutlineHeart,
    AiOutlineComment,
  } from "react-icons/ai";
  

function LikeMyPhoto() {
  const [pressNumber, setPressNumber] = useState(0)
  const [liked, setLiked] = useState(false)
  const handlePressNumber = () => {
    setPressNumber(pressNumber + 1)
  }
  const toggleHandler = () => {
    setLiked(!liked)
  }
  
  return (
    <div className='container text-center'>
        <h1 className='title'>Like Photo App</h1>
        <h1 className='subtitle'>Pressed The Image : {pressNumber} times</h1>
        <div className='container d-flex flex-column'>
            <img onDoubleClick={handlePressNumber} src="https://picsum.photos/200/300" alt='dog' />
            {liked ? <AiFillHeart size={50} onClick={toggleHandler} /> : <AiOutlineHeart size={50} onClick={toggleHandler} />}
        </div>
    </div>
  )
}

export default LikeMyPhoto