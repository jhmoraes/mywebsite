import React, { useContext } from "react"
import { FooterContainer, MenuShow, MenuShowContainer, ButtonsFooter } from './styled-footer'
import themeIcon from '../../img/dianoite.png'
import menuIcon from '../../img/barra-de-menu.png'
import GlobalStateContext from '../../globalState/GlobalStateContext'
import { goToCareer, goToHome, goToProject } from '../../router/Coordinator'
import { useNavigate } from "react-router-dom";



const Footer = () => {

    const { lightTheme, colorBackground, colorTextMenu} = useContext(GlobalStateContext)
    const navigate = useNavigate()

    console.log(colorBackground)


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
                        <p><a onClick={()=>goToProject(navigate)}>Projetos</a></p>
                        <p><a onClick={()=>goToCareer(navigate)}>Carreira</a></p>
                    </MenuShow>

                </div>


            </ButtonsFooter>
        </FooterContainer>
    )
}

export default Footer