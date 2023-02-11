import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import './searched.css'

function Searched() {

    const[searchItem, setSearchItem] = useState([1,2])
    const params = useParams()

    // function getSearch(name) {
    //     fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&query=${name}`)
    //      .then((response) => response.json())
    //      .then((data) => setSearchItem(data.results));
    // }


    const getSearch = async (name) => {
        const data = await fetch (
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=9&query=${name}`
        )
        const recipes = await data.json();
        setSearchItem(recipes.results);
    };

    useEffect(()=>{
        getSearch(params.search)
    },[params.search])

    console.log(searchItem)

  return (
    <div className='Searcheditem-cont'>
        {searchItem.map((item)=>{
            return (
                <Link to={"/recipe/"+ item.id } >
                    <div className='searchitem' key={item.id} >
                        <img src={item.image} />
                        <p>{item.title}</p>
                    </div>
                </Link>
            )
        })}
    </div>
  )
}

export default Searched