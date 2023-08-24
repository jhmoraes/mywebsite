import React, { useEffect, useState } from "react";
import GlobalStateContext from "./GlobalStateContext";
import fundoNuvem from '../img/fundo-nuvem.jpg'


const GlobalState = (props) => {

    const [theme, setTheme] = useState()
    const [colorBackground, setColorBackground] = useState(`${fundoNuvem}`)
    const [colorTextMenu, setColorTextMenu] = useState('#ffffff')
    const [colorTextHeader, setColorTextHeader] = useState('#2e2e2e')
    const [colorText, setColorText] = useState('#2e2e2e')   
    const [colorShadowCard, setColorShadowCard] = useState('#ffb6c1')   

    useEffect(()=>{
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
        setColorBackground(`#282a36`)
        setColorTextMenu('#282a36')
        setColorTextHeader('#D3D3D3')
        setColorText('#D3D3D3')
        setColorShadowCard('#282a36')
    }

    const themeLight = () =>{
        setColorBackground(`${fundoNuvem}`)
        setColorTextMenu('#ffffff')
        setColorTextHeader('#2e2e2e')
        setColorText('#2e2e2e')
        setColorShadowCard('#ffe4ec')
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

    const data = {lightTheme, colorBackground, colorText, colorTextMenu, colorTextHeader, colorShadowCard}

    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )

}

export default GlobalState