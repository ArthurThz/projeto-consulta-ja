import styled from "styled-components";
import { breakpoints, colors } from "../../../GlobalStyles/styles-variables";
export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 90vh;

  padding: 2rem 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 2rem;

  h1 {
    font-size: 1.5rem;
  }

  h2 {
    font-size: 1.3rem;
  }
`;

export const Card = styled.div`
  width: 90%;
  max-width: 400px;

  padding: 1.5rem 1.3rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 1rem;

  border: 1px solid ${colors.textGray};
  border-radius: 5px;
  transition: all 0.3s ease-in;
  box-shadow: 0 0 8px 0 ${colors.darkBlue};
  outline: none;

  &:hover {
    outline: 1px solid ${colors.darkBlue};
  }

  @media (min-width: ${breakpoints.md}) {
    max-width: 500px;
  }
`;

export const Group = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  gap: 1rem;

  padding: 0.4rem 0;
`;

export const EmptyAppointments = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;

export const BtnNewAppointment = styled.button`
  width: 200px;
  height: 40px;

  background-color: ${colors.darkBlue};
  color: #fff;
`;
