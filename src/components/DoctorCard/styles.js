import styled from "styled-components";
import { colors } from "../../GlobalStyles/styles-variables";

export const Container = styled.div`
  width: 100%;
  min-height: 80vh;
  height: 100%;
  padding: 2rem 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.3rem;
`;

export const Card = styled.div`
  height: 400px;
  width: 70%;
  position: relative;
  border: 1px solid black;

  background-color: #fff;

  padding: 2em;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  border: 1px solid ${colors.textGray};
  border-radius: 5px;
  transition: all 0.2s ease-in;
  box-shadow: 0 0 8px 0 ${colors.darkBlue};
  outline: none;

  &:hover {
    outline: 1px solid black;
    box-shadow: 0 0 10px 0 ${colors.darkBlue};
  }
`;
