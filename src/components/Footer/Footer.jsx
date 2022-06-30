import React, { useContext, useEffect } from "react"
import { FooterContainer, MenuShow, MenuShowContainer, ButtonsFooter } from './styled-footer'
import themeIcon from '../../img/dianoite.png'
import menuIcon from '../../img/barra-de-menu.png'
import GlobalStateContext from '../../globalState/GlobalStateContext'
import { goToHome } from '../../router/Coordinator'
import { useNavigate } from "react-router-dom";



const Footer = () => {

    const { lightTheme, colorBackground, menuShow, colorTextMenu} = useContext(GlobalStateContext)
    const navigate = useNavigate()

    console.log(colorTextMenu)


    return (
        <FooterContainer colorBackground={colorBackground}>
            <p onClick={() => goToHome(navigate)}>@Juliana</p>

            <ButtonsFooter>
                <a onClick={() => lightTheme()}><img src={themeIcon} /></a>
                <input type='checkbox' id='active-menu-show' />

                <div className="active-menu-show-container">
                    <label for='active-menu-show'>
                        <img src={menuIcon} />
                    </label>

                    <MenuShow className="menuShow" colorTextMenu={colorTextMenu}>
                        <a><p>Sobre mim</p></a>
                        <a><p>Carreira</p></a>
                    </MenuShow>

                </div>


            </ButtonsFooter>
        </FooterContainer>
    )
}

export default Footer