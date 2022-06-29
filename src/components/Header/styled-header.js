import styled from "styled-components";

export const HeaderContainer = styled.div`
    /* background-color: green; */
    height: 10vh;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 15rem 0 0;
    ul{
        list-style: none;
        display: flex;
        justify-content: space-around;
        width: 20vw;
    }

    li{
        margin-left: 0,5rem;
    }


    @media screen and (max-width: 480px){
        display: none;
    }
`