import React, { useState } from 'react'
import "./search.css"
import { useNavigate } from 'react-router-dom'


function Search() {
    const[input, setInput] = useState("")

    const navigate = useNavigate()

    function SubmitHandler(e) {
        e.preventDefault()
        navigate("/searched/"+input)

    }

  return (
     <div className='search-cont'>
        <form onSubmit={SubmitHandler} >
            <input type="text" value={input} onChange={((e)=> setInput(e.target.value)) } placeholder="Search Product" />
        </form>
    </div>
  )
}

export default Search