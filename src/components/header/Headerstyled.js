import styled from "styled-components";

export const Headers = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Container = styled.header`

    min-height: 100px;
    display: flex;
    align-items: center;
  
    img{
        height:100px;
        @media(max-width:1100px){
         height:80px;
        }
    }

`;