import styled from "styled-components";

export const CardContainer = styled.div`
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 15% 2%;
    border-radius: 5px;
    box-shadow: 4px 25px 20px -5px  ${props => props.colorShadowCard};
    max-height: 85%;

    img{
        width: 100%;
        height: 50%;
        margin-bottom: 30%;
        border-radius: 15px;
    }

    :hover{
        border-image-slice: 1;
        border-image-width: 2px;
        border-image-source: linear-gradient(250deg,#ffe4ec, #a067e4, #ffb6c1,#66d3fa,#a067e4);
        box-sizing: border-box;
        transition:  border-image-width 500ms;
    }

    p{
        margin-top: 1.5rem ;
        font-size: 1.4rem;
        color: #808080;
    }

   
    @media screen and (min-width: 1921px){
        width: 80%;
    }
`