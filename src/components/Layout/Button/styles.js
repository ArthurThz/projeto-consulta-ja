import styled from "styled-components";
import { colors } from "../../../GlobalStyles/styles-variables";

export const Container = styled.button`
  /* max-width: 300px; */
  width: 45%;
  padding: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ variant }) =>
    variant === "primary" ? `${colors.darkBlue}` : "#FFF"};
  color: ${({ variant }) =>
    variant === "primary" ? "#FFF" : `${colors.darkBlue}`};
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  cursor: pointer;

  border: 2px solid ${colors.darkBlue};
  font-size: 1rem;
  border-radius: 2rem;
  transition: all 0.4s ease;

  &:hover {
    background-color: ${colors.darkBlue};
    color: #fff;
  }
`;
