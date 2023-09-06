import styled, { keyframes } from "styled-components";
import { colors, breakpoints } from "../../../GlobalStyles/styles-variables";

const underlineAnimation = keyframes`
           
 0%{
     width:20%;
 }
 100%{
     width:110%;
 }

`;

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 3rem 2rem;
  gap: 1rem;
  h1 {
    font-size: 1.5rem;
    font-family: "Roboto", sans-serif;
    color: ${colors.darkBlue};
  }

  input {
    height: 40px;
  }

  @media (min-width: ${breakpoints.md}) {
    h1 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
  }
`;

export const ItemContainer = styled.div`
  width: auto;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  z-index: 1;

  transition: 0.2s ease-in;

  div {
    width: 110%;

    border: 1px solid transparent;
  }

  &:hover {
    z-index: 3;

    transform: scale(0.8);

    font-size: 1.5rem;
    font-weight: bold;
    color: ${colors.darkBlue};
    @media (min-width: ${breakpoints.md}) {
      transform: scale(0.9);
    }

    div {
      display: block;
      animation: ${underlineAnimation} 0.5s ease;
      border: 1px solid ${colors.darkBlue};
    }
  }

  @media (min-width: ${breakpoints.md}) {
    font-size: 1.2rem;
  }
`;
