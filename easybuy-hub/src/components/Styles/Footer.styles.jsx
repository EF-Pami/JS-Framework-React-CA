import styled from "styled-components";

export const styledFooter = styled.footer`
display: flex;
align-items: center;
margin-left: 25px;
position: fixed;
bottom: 0;
width: 100%

a {
    text-decoration: none;
    color: ${({theme}) => theme.colors.blue};
    font-size:20px;
    font-weight: bold;
    margin-left: 10px;
}
`