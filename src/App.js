import React, { createContext, useState } from 'react'
import ReactSwitch from 'react-switch'
import './App.css'
import Child from './Child'

export const themeContext = createContext(null)

const App = () => {
  const [theme, setTheme] = useState("dark")
  const toggleTheme = () => {
    setTheme(theme=>theme==="dark"?"light":"dark")
  }
  return (
    <themeContext.Provider value={theme}>

      <div className='contenedor' id={theme}>
        <Child/>
        <ReactSwitch
          onChange={toggleTheme}
          checked={theme === "light"}
          checkedIcon={false}
          uncheckedIcon={false}
        />
      </div>
    </themeContext.Provider>
  )
}

export default App