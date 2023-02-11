import React, { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import "./veggie.css"
import { Link } from 'react-router-dom';


function Veggie() {

    const[veggie, Setveggie] = useState([])

    useEffect(()=>{

        const check = localStorage.getItem("veggie")

        if(check){
            Setveggie(JSON.parse(check))
        } else {
            fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tag=vegetarian`)
             .then((response) => response.json())
             .then((data) => localStorage.setItem("veggie", JSON.stringify(data.recipes)));
             
        }
         
        //  Setveggie(data.recipes)
    }, [])

    console.log(veggie)


  return (
    <div className='veggie-cont'>
        <h2>Our Vegetarian Picks</h2>
        <br/>
        <Splide options={{perPage: 4, arrows: false, pagination: false, drag: "free", gap: "1rem" }}>
        {veggie.map((item)=>(
            <SplideSlide key={item.id} >
            <Link to={"/recipe/" + item.id} >
                <div className='veg-item' key={item.id}>
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

export default Veggie