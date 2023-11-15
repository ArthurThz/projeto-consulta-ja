import styled from "styled-components";
import { colors } from "../../../GlobalStyles/styles-variables";

export const Container = styled.div`
  width: 100%;
  min-height: 84vh;
  height: 100%;

  padding: 4rem 3rem;
`;

export const List = styled.ul`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  list-style: none;
`;

export const Item = styled.li`
  font-size: 1.2rem;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  color: ${colors.darkBlue};
  cursor: pointer;
`;
