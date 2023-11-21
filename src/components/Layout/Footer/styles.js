import styled from "styled-components";
import { colors } from "../../../GlobalStyles/styles-variables";
export const Container = styled.footer`
  width: 100%;
  padding: 2rem;

  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${colors.lightBlue};
  gap: 1rem;
`;

export const Title = styled.h2`
  font-size: 1.2rem;
  color: #000;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
`;

export const SocialMedia = styled.div`
  /* width: 100%; */
  padding: 1rem;
  display: flex;
  align-items: center;
  /* justify-content: space-around; */
  gap: 1rem;
`;

export const SocialMediaLinks = styled.a`
  padding: 0.6rem 1rem;
  display: flex;
  align-items: center;
  border: 2px solid ${colors.lightBlue};
  justify-content: center;
  gap: 1rem;
  text-decoration: none;

  border-radius: 2rem;
  color: ${colors.textGray};
  font-size: 0.9rem;
  transition: 0.3s ease all;
  &:hover {
    background-color: ${colors.lightBlue};
    border: 2px solid ${colors.textGray};
  }
`;

export const Contacts = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const ContactItem = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: ${colors.textGray};
  font-size: 0.9rem;
`;

export const Copyright = styled.span`
  font-size: 1rem;
  color: #000;
  font-weight: bold;
`;
