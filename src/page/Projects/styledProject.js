import styled from "styled-components"

export const ProjetcContainer = styled.div`
    background-color: ${props => props.colorBackground};
    background-image: url(${(props => props.colorBackground)});
    background-size: cover;
    display: flex;   
    flex-direction: column; 
    justify-content: space-between;   
    height: 100vh; 
    padding: 0 5vw;
    
`
export const ProjectsBodyContainer = styled.div`
    height: 100%;
    padding: 9% 10%;
    column-gap: 5%;
    row-gap: 3%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    
    justify-items: center;
    align-items: center;

    @media screen and (max-device-width: 800px){
        max-height: 80vh;
        min-width: 100%;
        overflow: scroll;
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(4,1fr);
        align-items: center;
        justify-items: center;        
    }
    
    @media screen and (min-device-width: 801px) and (max-device-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2,1fr);
    }

    @media screen and (min-width: 1201px){
        padding: 0 15%;
    }

`