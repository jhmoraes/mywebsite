import React, { useContext } from "react"
import {HeaderContainer} from './styled-header'
import GlobalStateContext from '../../globalState/GlobalStateContext'

const Header = () =>{

    const {colorTextHeader} = useContext(GlobalStateContext)

    return(
        <HeaderContainer colorTextHeader={colorTextHeader}>
            <ul>
                <li>Home</li>
                <li>Carreira</li>
                <li>Contato</li>
            </ul>
        </HeaderContainer>
    )
}

export default Header