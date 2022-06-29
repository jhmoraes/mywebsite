import React, {useContext, useEffect} from "react"
import {FooterContainer} from './styled-footer'
import themeIcon from '../../img/dianoite.png'
import menuIcon from '../../img/barra-de-menu.png'
import GlobalStateContext from '../../globalState/GlobalStateContext'
import {goToHome} from '../../router/Coordinator'
import { useNavigate } from "react-router-dom";



const Footer = () =>{

    const {lightTheme, colorBackground, menuShow} = useContext(GlobalStateContext)   
    const navigate = useNavigate()


    return(
        <FooterContainer colorBackground={colorBackground}>
            <p onClick={()=> goToHome(navigate)}>@Dev.Juliana</p>
            <div>
                <a onClick={()=>lightTheme()}><img src={themeIcon}/></a>              
                <a onClick={()=>menuShow()}><img src={menuIcon}/></a>              
            </div>
        </FooterContainer>
    )
}

export default Footer