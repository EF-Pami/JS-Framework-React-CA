import styled from "styled-components";

export const styledHeader = styled.header`
border: 0;
background-color: ${({theme}) => theme.colors.beige};

a {
    color: ${({theme}) => theme.colors.blue};
}

img {
    margin: 20px 0;
}
`;