import styled from "styled-components";
import { breakpoints, colors } from "../../GlobalStyles/styles-variables";

export const Container = styled.div`
  width: 100%;
  min-height: 80vh;
  height: 100%;
  padding: 2rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.3rem;

  @media (min-width: ${breakpoints.md}) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const Card = styled.div`
  min-height: 400px;
  max-width: 500px;
  height: 500px;

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

  h2 {
    font-size: 1.4rem;
  }

  &:hover {
    outline: 1px solid black;
    box-shadow: 0 0 10px 0 ${colors.darkBlue};
  }

  @media (min-width: ${breakpoints.sm}) {
    max-width: 350px;
    width: 75%;
  }
`;
