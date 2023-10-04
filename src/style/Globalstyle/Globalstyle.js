import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`

body{
    margin:0;
    padding:0;
    box-sizing: border-box;
    line-height:0;
    font-family: 'Roboto Mono', serif;
}

html{
    font-size:62.5%;
}

@media screen and (max-width: 768px) {
    html{
        font-size:50%;
    }
}

@media screen and (max-width: 460px) {
    html{
        font-size:45%;
    }
}
`;
