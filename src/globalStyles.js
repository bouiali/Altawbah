import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html{
        scroll-behavior: smooth;
    }
    body {
        margin: 0;
        font-family: 'josefin sans';
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
    *{
        text-transform: capitalize;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    button{
        padding: 15px;
        border-radius: 8px;
        font-size: larger;
        font-weight: bolder;
        border: none;
        cursor: pointer;
        border: 2px solid green;
    }
    a{
        color: black;
        text-decoration: none;
    }
    section{
        padding: 50px 20px;
    }
`;

export const SectionHeading = styled.div`
    display: flex;
    justify-content: center;
    padding: 0 0 50px 0;
    h2{
        position: relative;
        padding: 20px;
        border: 2px solid black;
        border-radius: 10px;
        text-transform: uppercase;
        transition: 1s;
        z-index: 2;
        font-size: 22px;
    }
    h2::before{
        content: '';
        position: absolute;
        width: 13px;
        height: 13px;
        border-radius: 50%;
        left: -15px;
        top: 50%;
        transform: translate(-50%, -50%);
        background-color: green;
        transition: 500ms;
        z-index: -1;
    }
    h2::after{
        content: '';
        position: absolute;
        width: 13px;
        height: 13px;
        border-radius: 50%;
        left: calc(100% + 15px);
        top: 50%;
        transform: translate(-50%, -50%);
        background-color: green;
        transition: 500ms;
        z-index: -1;
    }
    h2:hover{
        color: white;
        border-color: green;
    }
    h2:hover::before{
        left: 0;
        height: 100%;
        width: 50%;
        border-radius: 0;
        transform: translate(0, -50%);
    }
    h2:hover::after{
        left: 50%;
        height: 100%;
        width: 50%;
        border-radius: 0;
        transform: translate(0, -50%);
    }
`;

export default GlobalStyles;