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
`;

export const FormContainer = styled.div`
  width: 100%;
  padding: 3rem 1.5rem;
  margin-top: 1rem;
  border: 2px solid ${colors.darkBlue};
  box-shadow: 0 0 15px 0 ${colors.darkBlue};
  border-radius: 1rem;
`;

export const Formulario = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  button {
    width: 100%;
  }
`;
