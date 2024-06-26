import styled from "styled-components";

export const StyledWrapper = styled.div`
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
    margin-bottom:80px;

    label {
        margin:4px 0;
    }

    input {
        height: 36px;
        border: 1px solid ${({theme}) => theme.colors.black};
        border-radius: 20px;
        padding: 10px;

        :focus {
            outline: 1px solid ${({theme}) => theme.colors.black};
        }
    }

    .body {
        height: 150px;
        text-align: top;
        display: flex;
        align-items: flex-start;
        padding: 10px;
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
        background-color: ${({theme}) => theme.colors.blue};
        color: ${({theme}) => theme.colors.white};
        border-radius: 10px;
        border: none;
        font-weight:bold;
        cursor: pointer;

        &:hover {
            background-color: ${({theme}) => theme.colors.red};
        }
    }
}

.success-message {
    color: ${({theme}) => theme.colors.black};
    text-align: center;
    margin-top: 20px;
}
`