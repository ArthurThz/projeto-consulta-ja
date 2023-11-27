import styled from "styled-components";
import { colors, breakpoints } from "../../../GlobalStyles/styles-variables";

export const Container = styled.main`
  width: 100%;
  min-height: 90vh;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${colors.darkBlue};

  @media (min-width: ${breakpoints.md}) {
    font-size: 1.8rem;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  padding: 3rem 1.5rem;
  margin-top: 1rem;
  border: 2px solid ${colors.darkBlue};
  box-shadow: 0 0 15px 0 ${colors.darkBlue};
  border-radius: 1rem;

  @media (min-width: ${breakpoints.md}) {
    width: 70%;
  }

  @media (min-width: ${breakpoints.lg}) {
    width: 40%;
  }
`;

export const Paragraph = styled.p`
  font-size: 0.8rem;
  font-family: "Poppins", sans-serif;
  margin: -0.5rem 0 1rem 0;

  @media (min-width: ${breakpoints.md}) {
    font-size: 1rem;
  }
  @media (min-width: ${breakpoints.lg}) {
    font-size: 1rem;
  }
`;

export const SignUpLink = styled.span`
  color: ${colors.mdBlue};
  text-decoration: underline;
  cursor: pointer;
`;

export const Formulario = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  button {
    width: 100%;
  }

  @media (min-width: ${breakpoints.md}) {
    button {
      width: 70%;
    }
  }

  @media (min-width: ${breakpoints.lg}) {
    align-items: flex-start;

    button {
      width: 40%;
    }
  }
`;
