import styled from "styled-components";

export const FooterContainer = styled.footer`
    background-color: aqua;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem; 

    p{
        color: #bd93f9;
        cursor: pointer;
    }

        
    @media screen and (max-width: 480px){
        height: 8vh;
        background-color: ${props => props.colorBackground};
    }
    
`

export const ButtonsFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    //background-color: bisque;
    position: relative;
    
    img{
        height: 3vh;
        cursor: pointer;
        :active{opacity: 0.2}
    }
    
    input{
        display: none;
    }
    
    .menuShow{
        display: none;
        position: absolute;
    }
    
    input:checked + .active-menu-show-container .menuShow {
        display: block;
    }
    
    @media screen and (max-width: 480px){
        width: 25vw;
    }
    `


export const MenuShow = styled.div`
    background: -webkit-linear-gradient(#A1C0FD, #E3A0FE);
    right: 1%;
    bottom: 150%;
    text-align: end;
    padding: 0.5rem 1rem;
    border-radius: 8px; 
    
    a p{
        color: ${props => props.colorTextMenu};
        margin-bottom: 1rem;
        margin-top: 0.5rem;
    }

    @media screen and (max-width: 380px){
        font-size: 1rem;
        width: 25vw;
        height: 10vh;
    }

    @media screen and (min-width: 480px){
        font-size: 1.2rem;
        width: 22vw;
        height: 10vh;
    }


`