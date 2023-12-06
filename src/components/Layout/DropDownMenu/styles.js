import styled from "styled-components";
import { colors } from "../../../GlobalStyles/styles-variables";

export const OptionsContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: 1.7rem;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
`;

export const Options = styled.button`
  width: auto;
  padding: 1rem;
  border-radius: 1rem;
  border: 2px solid #fff;
  background-color: #fff;
  cursor: pointer;
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  color: ${colors.darkBlue};

  &:focus {
    border: 2px solid ${colors.darkBlue};
  }
`;
