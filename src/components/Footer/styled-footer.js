import styled from "styled-components";

export const FooterContainer = styled.footer`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem; 

    p{
        color: #bd93f9;
        cursor: pointer;
    }

    img{
        height: 3vh;
        cursor: pointer;

        :active{
            opacity: 0.2;

        }
    }


    @media screen and (max-width: 480px){
        height: 8vh;
        background-color: ${props => props.colorBackground};

        a{
            margin: 0 0 0 3rem;
            
        }
    }
    
`