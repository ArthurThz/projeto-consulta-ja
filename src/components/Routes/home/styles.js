import { styled } from "styled-components";

import { breakpoints, colors } from "../../../GlobalStyles/styles-variables";

export const Container = styled.main`
  background-color: ${colors.background};
  width: 100%;
  height: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  /* @media (min-width: ${breakpoints.lg}) {
  } */

  /* @media (min-width: ${breakpoints.xl}) {
  } */
`;

export const Presentation = styled.div`
  padding: 2rem 3rem;

  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;

  div {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    h2 {
      color: ${colors.darkBlue};
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
      text-align: justify;
    }

    button {
      width: 100%;
      border-radius: 100px;
      background-color: ${colors.darkBlue};
    }
  }
  img {
    width: 80%;
  }

  @media (min-width: ${breakpoints.md}) and (max-width: 1024px) {
    width: 90%;

    div {
      h2 {
        font-size: 1.8rem;
      }

      p {
        font-size: 1.2rem;
        letter-spacing: 0.8px;
      }

      button {
        width: 200px;
      }
    }

    img {
      width: 45%;
    }
  }

  @media (min-width: ${breakpoints.lg}) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    gap: 2rem;
    height: 90vh;

    img {
      width: 40%;
    }
    div {
      gap: 2rem;
      flex: 2%;
      h2 {
        font-size: 1.7rem;
      }

      p {
        font-size: 1rem;
      }

      button {
        width: 180px;
        font-size: 0.9rem;
      }
    }
  }

  @media (min-width: ${breakpoints.xl}) {
    div {
      gap: 2.5rem;
      h2 {
        font-size: 3rem;
      }
      p {
        font-size: 1.3rem;
        text-align: start;
      }
    }
  }
`;

export const OurData = styled.div`
  width: 100%;

  padding: 2rem 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${colors.darkBlue};

  color: #ffff;

  .middle {
    border: 1px solid #ffff;
    border-top: none;
    border-bottom: none;
  }

  @media (min-width: ${breakpoints.md}) {
    padding: 2.5rem 1.5rem;
  }

  @media (min-width: ${breakpoints.lg}) {
    padding: 2.5rem 1.5rem;
  }

  @media (min-width: ${breakpoints.xl}) {
    padding: 3rem 2rem;
  }
`;

export const DataItem = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 0.5rem;
  }

  @media (min-width: ${breakpoints.md}) {
    p {
      font-size: 0.8rem;
    }
  }

  @media (min-width: ${breakpoints.xl}) {
    h3 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

export const Hero = styled.div`
  position: relative;

  padding: 2rem 3rem;

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 1rem;

  @media (min-width: ${breakpoints.lg}) {
    flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  }
`;

export const ImageContainer = styled.img`
  height: 80%;
  width: 80%;

  @media (min-width: ${breakpoints.lg}) {
    height: 50%;
    width: 50%;
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  padding: 1rem 0;
`;

export const Title = styled.h2`
  font-size: 1.4rem;
  text-align: ${({ justify }) => (justify ? "justify" : "center")};

  color: ${colors.darkBlue};

  @media (min-width: ${breakpoints.lg}) {
    font-size: 1.6rem;
  }

  @media (min-width: ${breakpoints.xl}) {
    font-size: 2rem;
  }
`;

export const Text = styled.p`
  font-size: 1rem;
  color: ${colors.textGray};
  text-align: ${({ justify }) => (justify ? "justify" : "center")};

  @media (min-width: ${breakpoints.lg}) {
    font-size: 1.1rem;
  }
  @media (min-width: ${breakpoints.xl}) {
    font-size: 1rem;
  }
`;

export const SpecialtyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 1.5rem;

  padding: 2rem 3rem;
`;

export const Message = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const Grid = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 2fr 2fr;
  place-items: center;
  justify-items: center;
  align-self: center;
  row-gap: 1rem;
  column-gap: 1rem;

  @media (min-width: ${breakpoints.md}) {
    grid-template-columns: 2fr 2fr 2fr;
  }
  @media (min-width: ${breakpoints.lg}) {
    grid-template-columns: 2fr 2fr 2fr;
  }
`;

export const GridItem = styled.div`
  min-height: 180px;
  width: 100%;
  box-shadow: 0 0 5px 0 ${colors.textGray};
  border-radius: 10px;
  padding: 0 0.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  img {
    width: 20%;
    height: 40%;
  }

  h3 {
    color: ${colors.darkBlue};
  }
  p {
    font-size: 0.8rem;
    text-align: center;
  }

  @media (min-width: ${breakpoints.md}) {
    width: 100%;
  }

  @media (min-width: ${breakpoints.lg}) {
    width: 60%;
    h3 {
      font-size: 1.2rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;
