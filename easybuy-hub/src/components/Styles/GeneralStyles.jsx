import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
}

body {
    background: ${({theme}) => theme.colors.bg};
    margin: 0;
    padding-top: 270px;
    font-family: 'Inter', sans-serif;
}

h1 {
    font-size: 32px
    color: ${({theme}) => theme.colors.black};
    padding: 0 4rem;
}

h2 {
    font-size: 30px;
    color: ${({theme}) => theme.colors.black};
}

h3 {
    font-size: 25px;
    color: ${({theme}) => theme.colors.black};
}
`

export default GlobalStyles;