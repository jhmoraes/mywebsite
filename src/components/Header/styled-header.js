import styled from "styled-components";

export const HeaderContainer = styled.div`
    height: 10vh;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 2rem 2rem 0 2rem;
    color: ${props => props.colorTextHeader};   

    ul{
        list-style: none;
        display: flex;
        justify-content: flex-end;
        width: 100%;
    }

    li{
        margin-left: 0.7rem;
    }


    @media screen and (max-width: 480px){
        display: none;
    }
    
    @media screen and (min-width: 481px) and (max-width: 768px){
        li{
            font-size: 1.3rem; 
            margin-left: 4rem
        }        
    }
    
    @media screen and (min-width: 769px) and (max-width: 1024px){
        padding: 2rem 3rem 0 2rem;

        li{
            font-size: 1.5rem; 
            margin-left: 4rem
        }  
    }

    @media screen and (min-width: 1025px){
        padding: 2rem 5rem 0 2rem;

        li{
            font-size: 1.5rem; 
            margin-left: 7rem
        } 
    }
`