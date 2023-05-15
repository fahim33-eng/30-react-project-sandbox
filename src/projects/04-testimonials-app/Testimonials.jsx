import React, { useEffect, useState } from 'react'

export default function Testimonials() {
    const [data, setData] = useState("")
    const [current, setCurrent] = useState("")
    const btnStyle = {
        padding : "5px 10px",
        margin : "10px",
        backgroundColor : "#AA44AA",
        color : "#FFF"
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/${current}`)
            const responseData = await response.json()
            console.log(responseData)
            setData(responseData)
        } 
        fetchData()
    }, [current])

  return (
    <div>
        <div className='d-flex'>
            <button onClick={() => setCurrent("users")} style={btnStyle}>User</button>
            <button onClick={() => setCurrent("posts")} style={btnStyle}>Post</button>
            <button onClick={() => setCurrent("comments")} style={btnStyle}>Comments</button>
        </div>
        <div>
            <ol >
                {data ? data.map((d) => {return (
                    <div className='pl-1 pb-1'>
                            <li className='bg-twitter'>{d.title ? d.title : d.name}</li>
                            <li className='bg-success'>{d.body ? d.body : d.email}</li>
                        </div>
                )}) : "No Data To Show Yet"}
            </ol>
        </div>
    </div>

  )
}
