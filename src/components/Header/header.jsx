import React, { useContext } from "react"
import {HeaderContainer} from './styled-header'
import GlobalStateContext from '../../globalState/GlobalStateContext'
import { goToHome, goToProject, goToCareer} from '../../router/Coordinator'
import { useNavigate } from "react-router-dom"


const Header = () =>{

    const navigate = useNavigate()
    const {colorTextHeader} = useContext(GlobalStateContext)

    return(
        <HeaderContainer colorTextHeader={colorTextHeader}>
            <ul>
                <li><a onClick={()=>goToHome(navigate)}>Home</a></li>
                <li><a onClick={()=>goToCareer(navigate)}>Carreira</a></li>
                <li><a onClick={()=>goToProject(navigate)}>Projetos</a></li>
            </ul>
        </HeaderContainer>
    )
}

export default Header