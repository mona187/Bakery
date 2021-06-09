import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
}
`;
export const CakeList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const Title = styled.h1`
  text-align: center;
`;

export const Description = styled.h4`
  text-align: center;
`;
export const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;
export const ProductWrapper = styled.div`
  margin: 20px;
  img {
    width: 200px;
    height: 200px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  p {
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    font-size: 50;
  }
`;
