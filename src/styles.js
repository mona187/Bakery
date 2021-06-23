import styled, { createGlobalStyle } from "styled-components";
import { Link, NavLink } from "react-router-dom";
export const GlobalStyle = createGlobalStyle`
body{
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
}
`;
export const Cakestyle = styled.div`
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
export const ThemeButton = styled.button`
  font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;
export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;
export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;

  img {
    width: 40%;
    float: left;
  }

  p {
    vertical-align: middle;
  }
`;
export const DeleteButtonStyle = styled.p`
  color: ${(props) => props.theme.DeleteColor};
  cursor: pointer;
`;
export const NavCakes = styled(NavLink)`
  color: ${(props) => props.theme.mainColor};
  margin: 10px;
  && active {
    color: ${(props) => props.theme.DeleteColor};
  }
`;
export const Logo = styled(Link)`
  padding: 1em;
  img {
    width: 8rem;
  }
`;
export const NavStyles = styled.nav`
  background-color: ${(props) => props.theme.backgroundColor};
`;
