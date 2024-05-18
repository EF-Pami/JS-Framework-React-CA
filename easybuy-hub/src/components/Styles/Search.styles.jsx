import styled from "styled-components";
import { Link} from "react-router-dom"

export const StyledSearch = styled.div`
display: flex;
flex-direction: column;
margin-left: auto;
margin-right: auto;
width: 300px;
`

export const StyledInputWrapper = styled.div`
display: flex;
width: 100%;
background-color: ${({theme}) => theme.colors.white};
border-radius: 5px;
padding: 4px;
`

export const StyledInput = styled.input`
border: none;
width: 100%;
border-radius: 10px;
background-color: transparent;
color: #000;
margin-left: 5px;

:focus {
    outline: none;
}

::placeholder {
    color: ${({theme}) => theme.colors.black};
}
`

export const StyledSearchResults = styled.div`
width: 100%;
background-color: ${({theme}) => theme.colors.white};
border-top: none;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
position:sticky;
`

export const StyledSearchedItem = styled(Link)`
display: flex;
justify-content: left;
height: 30px;
margin-left: 10px;
margin-top: 10px
text-decoration: none,
color: black;

:hover {
    font-size: 16px;
}
`