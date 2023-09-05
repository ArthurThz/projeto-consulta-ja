import styled from "styled-components";
import { colors } from "../../../GlobalStyles/styles-variables";

export const Container = styled.main`
    width:100%;
    min-height:90vh;
    height:100%;

    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
` 

export const ImageContainer = styled.div`
`

export const FormContainer = styled.div`
    width:95%;
    gap:1rem;
    border:1px solid ${colors.darkBlue};
    box-shadow:0 0 10px 0 ${colors.lightBlue};
    border-radius:.3rem;
    height:100;
    padding:3rem;

    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:center;

    h1{
        font-size:2rem;
        font-family:"Roboto", sans-serif;
        color:${colors.darkBlue};
    }
`

export const Form = styled.form`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:center;

    width:100%;
    height:100%;
    gap:1rem;

    button{
        width:100%;
    }
`

export const Row = styled.div`
    width:auto;
    display:flex;
    align-items:center;
    justify-content:center;
    gap: 0.5rem;
`