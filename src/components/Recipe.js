import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "./recipe.css"

function Recipe() {

  const params = useParams()

  const[detail, setDetail] = useState({})
  const[button, setButton] = useState("Instructions")
  console.log(detail)

  useEffect(()=>{
    fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
      .then((response) => response.json())
      .then((data) => setDetail(data));
    }, [params.id])


  return (
    <div className='recipe-cont'>
      <div className='div1'>
        <h4>{detail.title}</h4>
        <img src={detail.image} />
      </div>
      <div className='btn'>
        <button className={button=== "Instructions" ? "actives" : "" } onClick={()=>setButton("Instructions")} >Instructions</button>
        <button className={button=== "Ingredients" ? "actives" : "" }  onClick={ ()=> setButton("Ingredients")} >Ingredients</button>
        {button === "Instructions" &&
         <div className='instr-cont'>
          <p dangerouslySetInnerHTML={{__html: detail.summary} } />
          <p dangerouslySetInnerHTML={{__html: detail.instructions} } />
        </div>  }

        {button === "Ingredients" && 
          <ul>
            {detail.extendedIngredients.map((ingredient)=>(
              <li>{ingredient.original}</li>
            ))}
          </ul>
        }
        
      </div>
    </div>
  )
}

export default Recipe