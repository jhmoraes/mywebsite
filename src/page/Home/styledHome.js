import styled from "styled-components";

//telas no máximo 320, 480, 720, 768, 900, 1024, 1200....

export const HomeContainer = styled.div`
    background-color: ${props => props.colorBackground};
    border-radius: 30px;
    box-shadow: 0 0 2em black;
    display: flex;    

    @media screen and (max-width: 480px){
        border-radius: 0;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        //flex-grow:1;
        box-shadow: none;
    }
    
`

export const HomeBodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100vh;

    img{
        height: 25vh;
    }

    @media screen and (max-width: 380px){
        padding: 3rem 0;
        
    }
    
    @media screen and (min-width: 480px){
        padding: 4rem 0;
        
    }
    
`

export const ProfileText = styled.div`
    //background-color: pink;
    //height: 25vh;
    text-align: center;
    h1{
        font-size: 2.2rem;
        //color: #2e2e2e;
        color: ${props => props.colorText};
        margin-bottom: 0.2rem;
    }

    h2{
        font-size: 1.2rem;
        color: #808080;
        margin-bottom: 1.5rem;
    }

    p{
        width: 30vh;
        color: #808080;
    }
    
`

export const NetworkIcons = styled.div`

    img{:active{opacity: 0.2;}}
     
    @media screen and (max-width: 380px){
        //background-color: pink;
        img{
            padding: 0 0.5rem;
            height: 8vh;
        }
    }
    
    @media screen and (min-width: 480px){
        
        img{
            padding: 0 0.5rem;
            height: 9vh;
        }
    }

    @media screen and (min-width: 760px){
        
        img{
            height: 5vh;
        }
    }

    @media screen and (min-width: 1024px){
        
        img{
            height: 30vh;
        }
    }
    
`


export const HomePageContainer = styled.div`
    /* justify-content: center;
    align-items: center;
    background-color: yellow;
    width: 60vw;
    height: 70vh; */

`

