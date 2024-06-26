import styled from "styled-components";

export const StyledViewProduct = styled.div`
display: flex;
justify-content: center;
margin-bottom:80px;
`
export const StyledContainer = styled(StyledViewProduct)`
flex-direction: column;
max-width: 100%;
`
export const StyledInfoContainer = styled.div`
margin-top: 55px;
display: flex;
justify-content: space-evenly;
padding-bottom: 40px;
border-bottom: 1px solid ${({theme}) => theme.colors.black};

@media (max-width: 600px) {
    flex-direction: column;
}
`

export const StyledImg = styled.img`
width: 300px;
border-radius: 2rem;
border: 1px solid white;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

@media (max-width:800px) {
    width: 250px;
}

@media (max-width: 600px) {
    margin: auto;
}
`

export const StyledProductInfo = styled.div`
width: 350px;
text-align: left;
padding: 2rem;

@media (max-width: 600px) {
    margin: auto;
}
`
export const StyledPriceContainer = styled.div`
display:flex;
justify-content: space-between;
margin-top: 32px;
margin-bottom: 32px;
margin-right: 50px;
font-size: 20px
` 
export const StyledPrice = styled.div`
color: ${(props) => (props.isValid? 'black' : 'red')};
text-decoration: ${(props) => (props.isValid? 'none' : 'line-through')};
`
export const StyledBtn = styled.button`
width: 140px;
height: 32px;
background-color: ${({theme}) => theme.colors.green};
color: ${({theme}) => theme.colors.black};
font-weight:bold;
border: none;
border-radius: 5px;
cursor: pointer;
transition: background-color 0.5s;

&:hover {
    background-color: ${({theme}) => theme.colors.darkgreen};
}
`
export const StyledMessage = styled.div`
position: fixed;
top: 10%;
left: 50%;
transform: translateX(-50%);
background-color: ${({theme}) => theme.colors.blue};
color: ${({theme}) => theme.colors.white};
padding: 10p 20px;
border-radius: 5px;
box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
opacity: ${({ show}) => ( show ? 1 : 0)};
transition: opacity 0.5s ease-in-out;
z-index: 1000;
`

export const CalDiscount = styled.div`
display: flex;
justify-content: center;
align-items: center;
float: right;
color: ${({theme}) => theme.colors.white};
background-color: #ff0000;
width: 46px
height: 40px;
font-size: 20px
font-weight: bold;
border-radius: 55%;
`