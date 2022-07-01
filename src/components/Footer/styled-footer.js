import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem; 
    background-color: transparent;

    p{
        color: #bd93f9;
        cursor: pointer;
        font-size: 1rem;
    }

    @media screen and (max-width: 480px){
        height: 8vh; 

        p{
            font-size: 1rem;
        }
    }  

    @media screen and (min-width: 481px) and (max-width: 768px){
        font-size: 1.2rem;
        padding: 0 3.5rem 1.5rem 3.5rem;
        p{
            font-size: 1.1rem;
        }
    }

    @media screen and (min-width: 769px) and (max-width: 1024px){
        padding: 0 4rem 1.5rem 4rem;
        font-size: 2rem;
    }

    @media screen and (min-width: 1025px){
        padding: 0 7rem 1.5rem 7rem;
        font-size: 1.8rem;
        justify-content: flex-end;
        p{display: none}
    }

`

export const ButtonsFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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

    @media screen and (min-width: 481px){
        label img{
            display: none;
        }
    }

    @media screen and (min-width: 481px) and (max-width: 768px){
        
    }

    @media screen and (min-width: 769px) and (max-width: 1024px){
        
    }

    @media screen and (min-width: 1025px){
        padding: 0 0rem 2.5rem 0rem;
        font-size: 3rem;
        height: 3vh;
        img{
            height: 5vh;
        }
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