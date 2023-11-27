import styled from "styled-components";

export const InputContainer = styled.div`
  min-width: 250px;
  max-width: 100%;
  width: 100%;
  height: 80px;
  position: relative;
`;

export const InputStyled = styled.input`
  width: 100%;
  height: 60%;
  border-radius: 2rem;
  border: 1px solid rgb(66, 66, 66);
  outline: none;
  padding: 1.5em;

  font-size: 1em;
  font-family: "Poppins", sans-serif;
  opacity: 0.4;

  &:focus {
    outline: auto;
    outline-color: #413eddbe;
    box-shadow: 0 0 6px 0 #413edd;
    opacity: 1;
  }
`;

export const LabelStyled = styled.label`
  position: absolute;

  font-size: 0.8em;
  left: 20px;
  top: -11px;
  z-index: 2;
  background-color: #fff;
  padding: 0.2rem;
`;
