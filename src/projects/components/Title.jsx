import React from 'react'

function Title({ title }) {
  return (
    <h1 className='title text-center'>
        {title ? title : "Title"}
    </h1>
  )
}

export default Title