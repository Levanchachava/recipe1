import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "./cuisine.css"

function Cuisine() {

    const[cuisine, setCuisine] = useState([])
    let params = useParams()

    function getCuisine(name) {
        fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=9&cuisine=${name}`)
            .then((response) => response.json())
            .then((data) => setCuisine(data.results));
    }

    useEffect(()=>{
        getCuisine(params.type)
        console.log(cuisine)
    }, [params.type])


  return (
    <div className='cuisine-cont'>
        {cuisine.map((item) =>(
            <Link to={"/recipe/"+item.id} >
                <div className='cuis-item' key={item.id} >
                    <img src={item.image} />
                    <p>{item.title}</p>
                </div>
            </Link>
        ))}
        
    </div>
  )
}

export default Cuisine