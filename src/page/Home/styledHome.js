import styled from "styled-components";

export const HomeContainer = styled.div`
    background-color: ${props => props.colorBackground};
    background-image: url(${(props => props.colorBackground)});
    background-size: cover;
    display: flex;   
    flex-direction: column; 
    justify-content: space-between;   
    height: 100vh; 
    padding: 0 5vw;
`

export const HomeBodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;

    #photoPerfil{
        height: 25vh;
        transform: translateY(0px);
        animation: float 5s ease-in-out infinite;
        box-shadow: 4px 25px 50px -5px #a067e4;
        border-radius: 50%;
    }   

    @keyframes float {
        0% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-40px);
        }
        100% {
            transform: translateY(0px);
        }
    }
    
    @media screen and (min-width: 1025px){
        flex-direction: row-reverse;
        justify-content: space-around;
        padding: 0;
        
        #photoPerfil{
            height: 35vh;
        }   
    }
`

export const ProfileText = styled.div`
    text-align: center;
    width: 60vw;

    h1{
        font-size: 2rem;
        color: ${props => props.colorText};
        margin-bottom: 1.5rem;
    }

    label{
        color: ${props => props.colorText};
        font-size: 1.5rem;
        width: 5vw;
    }

    p{
        margin-top: 1.5rem ;
        font-size: 0.8rem;
        color: #808080;
    }

    @media screen and (max-width: 480px){     
        h1{font-size: 1.4rem}
        label{font-size: 1rem}
        p{font-size: 0.8rem}
    }

    @media screen and (min-width: 481px) and (max-width: 768px){
        width: 42vh;
        h1{font-size: 3rem}
        label{font-size: 1.7rem}
        p{font-size: 1.2rem}
        
    }
    
    @media screen and (min-width: 769px) and (max-width: 1024px){
        width: 42vh;
        h1{font-size: 3rem}
        label{font-size: 1.7rem}
        p{font-size: 1.2rem}
    }

    @media screen and (min-width: 1025px){
        width: 40%;
        padding-bottom: 1.5rem;
        h1{font-size: 3.8rem}
        label{font-size: 1.7rem}
        p{font-size: 1.5rem}
        
    }

    @media screen and (min-width: 2880px){
        width: 40%;
        padding-bottom: 1.5rem;
        h1{font-size: 6rem}
        label{font-size: 3.5rem}
        p{font-size: 2.5rem}

    }
`

export const NetworkIcons = styled.div`

    img{:active{opacity: 0.2}}
     
    @media screen and (max-width: 380px){
        img{
            padding: 0 0.5rem;
            height: 7vh;
           
        }
    }
    
    @media screen and (min-width: 381px) and (max-width: 480px){
        
        img{
            padding: 0 0.5rem;
            height: 8vh;
            
        }
    }

    @media screen and (min-width: 481px) and (max-width: 768px){
        
        img{
            height: 8vh;
            padding: 0 1rem;
        }
    }

    @media screen and (min-width: 769px) and (max-width: 1024px){
        
        img{
            height: 8vh;
            margin-top: 10%;
        }
    } 

    @media screen and (min-width: 1025px){
        display: flex;
        flex-direction: column;
        
        a{
            margin-bottom: 1.8rem;
            :hover{
                opacity: 0.4;
            }
        }

        img{
            height: 7.5vh;
        }
    }
    
`


