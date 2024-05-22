import styled from "styled-components";

export const StyledWrapper = styled.div`
margin: auto;
width: 50%;
text-align: center;

button {
    display: inline-flex;
    align-items:center;
    cursor:pointer;
    background-color: ${({theme}) => theme.colors.blue};
    color: ${({theme}) => theme.colors.white};
    border: none;
    border-radius: 20px;
    height: 30px;
    transition-duration:0.5s
}

button:hover {
    background-color: ${({theme}) => theme.colors.red};
}
`
