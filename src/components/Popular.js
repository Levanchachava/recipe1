import React, { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import "./popular.css"
import { Link } from 'react-router-dom';


function Popular() {

    const[popular, setPopular] = useState([])

    useEffect(()=>{

        const check = localStorage.getItem("popular")

        if(check){
            setPopular(JSON.parse(check))
        } else {
            fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
             .then((response) => response.json())
             .then((data) => localStorage.setItem("popular", JSON.stringify(data.recipes)));
            }
            

    }, [])

    console.log(popular)


  return (
    <div className='popular-cont'>
        <h2>Trading</h2>
        <br/>
        <Splide options={{perPage: 4, arrows: false, pagination: false, drag: "free", gap: "2rem" }}>
        {popular.map((item)=>(
            <SplideSlide key={item.id} >
                <Link to={"/recipe/" + item.id} >
                    <div className='pop-item' key={item.id}>
                        <img src={item.image} />
                        <p>{item.title}</p>
                        <div className='gradient'></div>
                    </div>
                </Link>
            </SplideSlide>
        ))}
        </Splide>
    </div>
  )
}

export default Popular