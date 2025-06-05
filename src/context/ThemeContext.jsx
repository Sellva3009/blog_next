'use client'
import React, { createContext, useState } from 'react'

export const ThemeContext = createContext() 

export const ThemeProvider = ({children}) => {
    const [mode, setMode] = useState('light')

    const handleToggle = () => {
        setMode(mode === 'light' ? 'dark' : 'light')
    }
    return (
      <ThemeContext.Provider value={{ mode, handleToggle }}>
        <div className={`theme ${mode}`}>{children}</div>
      </ThemeContext.Provider>
    );
}   

