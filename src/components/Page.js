import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Cuisine from './Cuisine'
import Italian from './Italian'
import Popular from './Popular'
import Searched from './Searched'
import Veggie from './Veggie'
import Recipe from './Recipe'

function Page() {
  return (
    <div>
      
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cuisine/:type' element={<Cuisine />} />
            <Route path='/searched/:search' element={<Searched />} />
            <Route path='/recipe/:id' element={<Recipe />} />
        </Routes>
    </div>
  )
}

export default Page