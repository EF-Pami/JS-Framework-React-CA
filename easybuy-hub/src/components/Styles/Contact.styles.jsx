import styled from "styled-components";

export const styledWrapper = styled.div`
margin: auto;
width: 350px;

h1 {
    display:flex;
    justify-content:center;
    text-align:center;
}

form {
    display: flex;
    flex-direction: column;
    background-color: ${({theme}) => theme.colors.white};
    border: 1px solid ${({theme}) => theme.colors.black};
    border-radius: 20px;
    padding: 2.1rem;

    label {
        margin:4px 0;
    }

    input {
        height: 36px;
        border: 1px solid ${({theme}) => theme.colors.black};
        border-radius: 20px;

        :focus {
            outline: 1px solid ${({theme}) => theme.colors.black};
        }
    }

    .body {
        height: 150px;
    }
    p{
        color: red;
        font-size:15px;
        margin: 0;
    }
    button{
        width: 50%;
        height:30px;
        margin:auto;
        margin-top:10px;
        background-color: ${({theme}) => theme.colors.black};
        color: ${({theme}) => theme.colors.white};
        border-radius: 10px;
        border: none;
        cursor: pointer;
    }
}
`