import styled from "styled-components";
import { colors, breakpoints } from "../../../GlobalStyles/styles-variables";

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: ${breakpoints.xl}) {
    height: 100vh;
    padding: 2rem;
    flex-direction: row;
  }
`;

export const ImageContainer = styled.div`
  width: 70%;
  height: 100%;
  display: none;
  box-shadow: 0 0 5px 0 #000;
  border-top-left-radius: 0.3rem;
  border-bottom-left-radius: 0.3rem;

  img {
    width: 100%;
    height: 100%;
    border-top-left-radius: 0.3rem;
    border-bottom-left-radius: 0.3rem;
  }

  @media (min-width: ${breakpoints.xl}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const FormContainer = styled.div`
  width: 95%;
  height: 100%;
  padding: 3rem;

  gap: 1rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  /* border:1px solid ${colors.darkBlue}; */
  border-radius: 0.3rem;

  box-shadow: 0 0 5px 0 #000;

  h1 {
    font-size: 2rem;
    font-family: "Roboto", sans-serif;
    color: ${colors.darkBlue};
  }

  @media (min-width: ${breakpoints.md}) {
    width: 70%;
  }

  @media (min-width: ${breakpoints.lg}) {
    width: 50%;
  }

  @media (min-width: ${breakpoints.xl}) {
    width: 50%;
    border-top-right-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;

    h1 {
      font-size: 2.5rem;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 100%;
  height: 100%;
  gap: 1rem;

  button {
    width: 100%;
  }
`;

export const Row = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;
