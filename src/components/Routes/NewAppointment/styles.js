import styled, { keyframes } from 'styled-components';
 import { colors,breakpoints } from "../../../GlobalStyles/styles-variables";

const underlineAnimation = keyframes`
           
 0%{
     width:20%;
 }
 100%{
     width:110%;
 }

`

export const Container = styled.div`
    width:100%;
    height:100vh;

    display:flex;
    align-items:center;
    justify-content:flex-start;
    flex-direction:column;
    padding:2rem;
    gap:2rem;

    h1{
        font-size:1.5rem;
        font-family:'Roboto',sans-serif;
        color:${colors.darkBlue}
    }

    @media(min-width:${breakpoints.md}){
        h1{
            font-size:2rem;
            margin-bottom:2.5rem;
        }
    }
`


export const ItemContainer = styled.div`
    width:auto;
    height:80px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    cursor:pointer;   

    z-index:1;   

    transition:.2s  ease-in;
    /* border:1px solid black; */

    div{
        width:110%;
       
        border:1px solid transparent;
    }

    &:hover{
        z-index:3;

        transform:scale(.8);

        font-size:1.5rem;
        font-weight:bold;
        color:${colors.darkBlue};
        @media(min-width:${breakpoints.md}){

            transform:scale(.9);
        }

        div{
            display:block;
            animation:${underlineAnimation} .5s ease ;
            border:1px solid ${colors.darkBlue};
            }
        }
    
        @media(min-width:${breakpoints.md}){
            font-size:1.2rem;
        }
    

`