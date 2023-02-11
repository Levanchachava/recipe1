import React from 'react';
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import "./category.css"
import { NavLink } from "react-router-dom"

function Category() {
  return (
    <div className='category-cont'>
        <NavLink to={'/cuisine/italian'} >
            <div>
                <FaPizzaSlice className='logo' />
                <h4>Italian</h4>
            </div>
        </NavLink>
        <NavLink to="/cuisine/american" >
            <div>
                <FaHamburger className='logo' />
                <h4>American</h4>
            </div>
        </NavLink>
        <NavLink to="/cuisine/thai" >
            <div>
                <GiNoodles className='logo' />
                <h4>Thal</h4>
            </div>
        </NavLink>
        <NavLink to="/cuisine/japanese" >
            <div>
                <GiChopsticks className='logo' />
                <h4>Chop</h4>
            </div>
        </NavLink>
    </div>
  )
}

export default Category