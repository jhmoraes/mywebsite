import React, { useEffect, useState } from "react";
import GlobalStateContext from "./GlobalStateContext";


const GlobalState = (props) => {

    const [theme, setTheme] = useState()
    const [menu, setMenu] = useState(true)
    const [colorBackground, setColorBackground] = useState('#ffffff')
    const [colorText, setColorText] = useState('#2e2e2e')   

    useEffect(()=>{
        setTheme(localStorage.getItem('themeStorage'))
        checkLocalStorage()    
    },[])

    const checkLocalStorage = () => {
        if(localStorage.getItem('themeStorage') === 'dark'){
            themeDark()
            setTheme('dark')
        }else if(localStorage.getItem('themeStorage') === 'light'){
            themeLight()
            setTheme('light')          
        }
    }

    const themeDark = () =>{
        setColorBackground('#282a36')
        setColorText('#D3D3D3')
    }

    const themeLight = () =>{
        setColorBackground('#ffffff')
        setColorText('#2e2e2e')
    }


    const lightTheme = () => {

        if(theme === 'light' || theme === null || theme === undefined){
            localStorage.setItem('themeStorage', 'dark')
            setTheme('dark')
            themeDark()
        } else if (theme === 'dark'){
            localStorage.setItem('themeStorage', 'light')
            console.log('clicou light')
            setTheme('light')
            themeLight()
        }
    }


    const menuShow = () => {
        // if(menu){
        //     setMenu(false)
        // } else{
        //     setMenu(true)
        // }

    }

    const data = {lightTheme, colorBackground, colorText, menuShow}

    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )

}

export default GlobalState