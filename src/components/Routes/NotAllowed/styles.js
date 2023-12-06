import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 90vh;

  display: flex;
  align-items: center;
  gap: 1rem;
  flex-direction: column;
  padding: 3rem 1.5rem;
`;

export const Message = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 1rem;
  justify-content: space-around;
  padding: 1rem 0;
`;

export const Image = styled.img`
  height: 200px;
  width: 50%;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  color: red;
`;

export const Text = styled.p`
  font-size: 0.9rem;
  width: auto;
  font-family: "Poppins", sans-serif;
  text-align: justify;
`;
