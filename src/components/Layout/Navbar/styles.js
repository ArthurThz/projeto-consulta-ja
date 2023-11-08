import { styled, keyframes } from "styled-components";
import { colors } from "../../../GlobalStyles/styles-variables";

export const Container = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`;

export const Logo = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  cursor: pointer;

  h1 {
    font-size: 1.8rem;
  }

  img {
    width: 80px;
    height: 60px;
  }
`;

export const LinksContainer = styled.div`
  width: auto;
  gap: 1.5rem;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  justify-content: space-around;
`;

const underlineAnimation = keyframes`
           
 0%{
     width:20%;
 }
 100%{
     width:110%;
 }

`;

export const Links = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.2s ease;

  &:hover {
    span {
      opacity: 0.8;
    }

    div {
      display: block;
      animation: ${underlineAnimation} 0.5s ease;
      border: 1px solid ${colors.darkBlue};
    }
  }
`;

export const Item = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 1.2rem;
  color: ${colors.darkBlue};
  font-weight: 500;
  cursor: pointer;
`;

export const Underline = styled.div`
  width: 110%;
  border: 1px solid transparent;
`;
