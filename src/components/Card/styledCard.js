import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 5% 2%;
    /* box-shadow: 4px 25px 20px -5px  ${props => props.colorShadowCard}; */
    
    img{
        width: 100%;
        border-radius: 15px;
    }
    
    img:hover{
        opacity: 0.5;
    } 
    /* :hover{
            border-image-slice: 2;
            border-image-width: 2px;
            border-image-source: linear-gradient(250deg,#ffe4ec, #a067e4, #ffb6c1,#66d3fa,#a067e4);
            box-sizing: border-box;
            transition:  border-image-width 500ms;
    }  */

    p{
        padding: 1.5rem 0 ;
        font-size: 1.4rem;
        color: #808080;
    }


    @media screen and (min-device-width: 481px) and (max-device-width: 800px) {
        width: 60%;
    }
    @media screen and (min-device-width: 801px) and (max-device-width: 979px) {
        
    }
    @media screen and (min-device-width: 980px) and (max-device-width: 1800px) {
        height: 50%;
    }
    @media screen and (min-width: 1921px){
       height: 40%;
    }

    
`