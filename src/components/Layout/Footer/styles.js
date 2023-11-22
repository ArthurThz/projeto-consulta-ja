import styled from "styled-components";
import {
  BlackRock,
  breakpoints,
  colors,
} from "../../../GlobalStyles/styles-variables";
export const StyledFooter = styled.footer`
  width: 100%;
  padding: 2rem;

  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${colors.darkBlue};
  gap: 1rem;

  /* @media (min-width: ${breakpoints.lg}) {
    flex-direction: row;
    justify-content: center;
  } */
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  padding: 3rem 1rem;

  @media (min-width: ${breakpoints.lg}) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    height: 50%;
    gap: 5rem;
  }
`;

export const Title = styled.h2`
  font-size: 1.2rem;
  color: #fff;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
`;

export const SocialMedia = styled.div`
  /* padding: 1rem; */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const SocialMediaLinks = styled.a`
  padding: 0.6rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  text-decoration: none;
  opacity: 0.7;

  border: 2px solid ${colors.darkBlue};
  border-radius: 2rem;
  color: ${BlackRock[300]};
  font-size: 0.9rem;
  transition: 0.3s ease all;
  &:hover {
    opacity: 1;
    border: 2px solid ${colors.lightBlue};
    border-radius: 2rem;
    background-color: #fff;
    border: 2px solid ${colors.textGray};
    color: ${colors.darkBlue};
  }
`;

export const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const ContactItem = styled.div`
  padding: 0.6rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: ${BlackRock[300]};
  opacity: 0.7;
  font-size: 0.9rem;

  &:hover {
    opacity: 1;
  }
`;

export const Copyright = styled.span`
  font-size: 1rem;
  color: #fff;
  font-weight: bold;
  margin-top: 2rem;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;
  padding: 3rem 1rem;
`;
