import styled from "styled-components"

export const HomeContainer = styled.div`
    background-color: ${props => props.colorBackground};
    background-image: url(${(props => props.colorBackground)});
    background-size: cover;
    display: flex;   
    flex-direction: column; 
    justify-content: space-between;   
    height: 100vh; 
    padding: 0 5vw;

    @media screen and (max-width: 480px){
        padding-top: 7%;
    }
    
`

export const ProjectsBodyContainer = styled.div`
    height: 100%;
    padding: 9% 10%;
    column-gap: 5%;
    row-gap: 3%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    @media screen and (max-width: 480px){
        max-height: 80vh;
        min-width: 100%;
        overflow: scroll;
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(4,1fr);
        align-items: center;
        justify-items: center;
        
        
    }
    
    @media screen and (min-width: 481px) and (max-width: 768px){
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2,1fr);
    }

    @media screen and (min-width: 1921px){
        padding: 0 15%;
    }

`