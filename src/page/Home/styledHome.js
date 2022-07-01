import styled from "styled-components";

//telas no máximo 320, 480, 720, 768, 900, 1024, 1200....

export const HomeContainer = styled.div`
    background-color: ${props => props.colorBackground};
    background-image: url(${(props => props.colorBackground)});
    background-size: cover;
    display: flex;   
    flex-direction: column; 
    justify-content: space-between;   
    height: 100vh; 
`

export const HomeBodyContainer = styled.div`
    //background-color: papayawhip;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    padding: 4rem 0;

    #photoPerfil{
        height: 25vh;
    }   
    
    @media screen and (min-width: 1025px){
        flex-direction: row-reverse;
        justify-content: space-around;
        padding: 0;
        
        #photoPerfil{
            height: 35vh;
            //padding: 0 5rem 0 0;
        }   
    }
`

export const ProfileText = styled.div`
    text-align: center;
    width: 60vw;

    h1{
        font-size: 2rem;
        color: ${props => props.colorText};
        margin-bottom: 0.2rem;
    }

    h2{
        font-size: 1.2rem;
        color: #808080;
        margin-bottom: 1.5rem;
    }

    p{
        font-size: 0.8rem;
        color: #808080;
    }

    @media screen and (min-width: 481px) and (max-width: 768px){
        width: 42vh;
        h1{font-size: 3rem}
        h2{font-size: 1.7rem}
        p{font-size: 1.2rem}
    }
    
    @media screen and (min-width: 769px) and (max-width: 1024px){
        width: 42vh;
        h1{font-size: 3rem}
        h2{font-size: 1.7rem}
        p{font-size: 1.2rem}
    }

    @media screen and (min-width: 1025px){
        width: 55vh;
        padding-bottom: 1.5rem;
        h1{font-size: 3.8rem}
        h2{font-size: 2.2rem}
        p{font-size: 1.5rem}
        
    }

    @media screen and (min-width: 2880px){
        
        width: 55vh;
        padding-bottom: 1.5rem;
        h1{font-size: 6rem}
        h2{font-size: 3.5rem}
        p{font-size: 2.5rem}

    }
`

export const NetworkIcons = styled.div`

    img{:active{opacity: 0.2}}
     
    @media screen and (max-width: 380px){
        img{
            padding: 0 0.5rem;
            height: 8vh;
        }
    }
    
    @media screen and (min-width: 381px) and (max-width: 480px){
        
        img{
            padding: 0 0.5rem;
            height: 9vh;
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


