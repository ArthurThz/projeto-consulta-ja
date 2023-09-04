import styled from "styled-components";
import { colors } from "../../../GlobalStyles/styles-variables";

export const Container = styled.main`
    width:100%;
    min-height:90vh;
    height:100%;

    border:1px solid black;

    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
` 

export const ImageContainer = styled.div`
`

export const FormContainer = styled.div`
    width:auto;
    gap:1rem;
    border:1px solid black;
    height:100;
    padding:1rem;

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
`