import React, {useContext} from "react"
import { createGlobalStyle } from "styled-components";
import GlobalStateContext from '../globalState/GlobalStateContext'



export const GlobalStyle = createGlobalStyle`
    body {
        background-color: red;
        margin: 0;
        padding: 0 5vw;
        
    }
`