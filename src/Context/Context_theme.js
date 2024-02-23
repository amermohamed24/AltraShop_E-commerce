'use client'
import {  createContext, useState } from "react";


export const Theme_context=createContext()

export const  ThemeProvider=({children})=>{
    const [mode,setMode]=useState("dark")
    const toggle=()=>{
        setMode(prevMode=>prevMode==="dark"? "light":"dark")
    }
    return(
        <Theme_context.Provider value={{toggle,mode} }>
            <div className={`theme ${mode}`}>
                {children}
            </div>
        </Theme_context.Provider>
    )

}