import { styled, keyframes } from "styled-components";
import { colors, breakpoints } from "../../../GlobalStyles/styles-variables";

export const Container = styled.nav`
  width: 100%;
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`;

export const Logo = styled.div`
  width: auto;
  display: flex;
  padding: 0.8rem;
  align-items: center;
  gap: 0.2rem;
  cursor: pointer;
  color: ${colors.darkBlue};

  h1 {
    font-size: 1.6rem;
  }

  img {
    width: 80px;
    height: 60px;
  }

  @media (min-width: ${breakpoints.md}) {
    h1 {
      font-size: 1.8rem;
    }
  }
`;

export const LinksContainer = styled.div`
  display: none;
  width: auto;
  gap: 1.5rem;
  align-items: center;
  padding: 0 1rem;
  justify-content: space-around;

  @media (min-width: ${breakpoints.lg}) {
    display: flex;
  }
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

export const BuguerMenu = styled.div`
  width: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
  cursor: pointer;
  padding: 0.3rem;
  border: 1px solid ${colors.darkBlue};
  border-radius: 0.2rem;

  @media (min-width: ${breakpoints.lg}) {
    display: none;
  }
`;

export const Line = styled.div`
  width: 100%;
  border: 2px solid ${colors.darkBlue};
  border-radius: 0.2rem;
`;

export const MobileMenu = styled.div`
  height: 100vh;
  z-index: 2;
  right: 0;
  left: 0;
  bottom: 50px;
  position: fixed;
  top: 15vh;
  background-color: black;
`;
