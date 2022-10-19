import React, { useContext } from 'react'
import { themeContext } from './App'

const Child = () => {
     const useCont=useContext(themeContext)
  return (
       <div>
            <h1>This is {useCont} mode</h1>
    </div>
  )
}

export default Child