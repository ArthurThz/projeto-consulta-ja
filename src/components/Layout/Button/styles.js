import styled from "styled-components";
import { breakpoints, colors } from "../../../GlobalStyles/styles-variables";

export const Container = styled.button`
  position: relative;
  padding: 0.3rem;
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px 0 ${colors.darkBlue};

  background-color: ${({ variant }) =>
    variant === "primary" ? `${colors.darkBlue}` : "#FFF"};

  color: ${({ variant }) =>
    variant === "primary" ? "#FFF" : `${colors.darkBlue}`};
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-size: 0.7rem;
  text-align: center;

  cursor: pointer;

  border: 2px solid ${colors.darkBlue};
  border-radius: 2rem;

  transition: all 0.5s ease-out;
  &:hover {
    background-color: ${colors.darkBlue};
    color: #fff;

    &::after {
      content: ${({ variant }) => (variant === "primary" ? "''" : "")};
      border-radius: 2rem;
      position: absolute;
      width: calc(100% + 10px);
      height: calc(100% + 10px);
      border: 2px solid ${colors.darkBlue};
    }
  }

  @media (min-width: ${breakpoints.md}) {
    min-width: 140px;
    width: 30%;
    font-size: 1rem;
  }
`;
