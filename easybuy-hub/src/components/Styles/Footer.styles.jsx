import styled from "styled-components";

export const StyledFooter = styled.footer`
display: flex;
align-items: center;
justify-content: center;
padding: 10px;
position: fixed;
bottom: 0;
width: 100%;
background-color: ${({theme}) => theme.colors.white};

p {
    margin: 0;
}

a {
    text-decoration: none;
    list-style-type: none;
    color: ${({theme}) => theme.colors.blue};
    font-size:20px;
    font-weight: bold;
    margin-left: 10px;
}
`