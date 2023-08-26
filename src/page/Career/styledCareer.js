import styled from "styled-components";

export const HomeContainer = styled.main`
    background-color: ${props => props.colorBackground};
    background-image: url(${(props => props.colorBackground)});
    background-size: cover;
    display: flex;   
    flex-direction: column; 
    justify-content: space-between;  
    height: 100vh; 
    padding: 0 5vw;

`

export const BarCareerContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative; 
    width: 70%;
    margin-left: 20%;
    
    
    img{
        height: 0.2vh;
        transform: rotate(90deg);
        width: 35%;
        position: absolute;
        left: -260px;
    } 

    @media screen and (max-width: 480px){  
        margin-left: 0;
        margin: 0 auto;
        padding-top: 50%;
        img{
            display: none;
        }
    }
    
    @media screen and (min-width: 481px) and (max-width: 768px){
        max-width: 80%;       
        img{
            left: -240px;
            width: 90%;
        } 
    }

    @media screen and (min-width: 1025px) and (max-width: 1920px){

        img{
            left: -260px;
        } 
    }

    @media screen and (min-width: 1921px){
        img{
            left: -350px;
            width: 35%;
        } 
    }
`

export const Formation = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 25vh;


    li{
        display: flex;
        font-size: 1.5rem;
        color: ${props => props.colorText}; 
        height: 15vh;
        align-items: flex-end;
        margin-bottom: 5%;
    }

    
    @media screen and (max-width: 380px){
        margin: 0 auto;
       li{
        font-size: 1.2rem;
       }
    }
    
    @media screen and (min-width: 381px) and (max-width: 480px){
        
        li{
        font-size: 1.3rem;
       }
       
    }

    @media screen and (min-width: 1300px){
        li{
        font-size: 1.8rem;
       }
    }

`