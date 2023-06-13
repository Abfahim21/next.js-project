'use client'

import { Children, createContext, useState } from "react"

export const ThemeContext = createContext()

export const ThemeProvider = () =>{
    const [mode, setMode] = useState('dark')

    const Toggle = () =>{
        setMode (prev=>(prev==='dark'? 'light' : 'dark'))
    }
    <ThemeContext.Provider value={ {mode, Toggle} }>
        {Children}
    </ThemeContext.Provider>
}

