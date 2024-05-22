import styled from "styled-components";

export const StyledHeader = styled.header`
border: 0;
background-color: ${({theme}) => theme.colors.white};

a {
    color: ${({theme}) => theme.colors.black};
}

img {
    margin: 10px 0;
}
`;