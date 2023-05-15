import React, { useState } from 'react'
import Title from '../components/Title'

export default function EsignatureApp() {
    const [name, setName] = useState("")
    const [date, setDate] = useState("")
    const inputStyle = {
        marginRight : "20px",
        padding : "5px 15px"
    }
    const handleChange = (e) => {
        e.preventDefault()
        setName(e.target.value)
    }
    const handleChange2 = (e) => {
        e.preventDefault()
        setDate(e.target.value)
    }
    document.body.style.background = "#787878"
  return (
    <div className='container text-center'>
        <Title title = {name} />
        <Title title = {date === "" ? "Date" : date} />
        <input style = {inputStyle} value={name} type="text" onChange={handleChange}/>
        <input style={inputStyle} type="date" value={date} onChange={handleChange2} />
    </div>
  )
}
