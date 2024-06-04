import styled from "styled-components";

export const StyledHeader = styled.h1`
display: flex;
justify-content: center;

`
export const StyledWrapper = styled.div`
display: flex;
justify-content: center;
margin-bottom: 80px;
`
export const StyledContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;

@media (max-width: 465px) {
    width:100%;
    
}
`
export const StyledItem = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin: 10px;
border: 1px solid ${({theme}) => theme.colors.black};
background-color: ${({theme}) => theme.colors.white};
border-radius: 2rem;
padding: 1rem;
width: 250px;
box-sizing: border-box;

img {
    width: 100px;
    height: 200px;
    object-fit: cover;
}

p {
    margin: 10px 0;
}

@media (max-width: 465px) {
    width: 100%;
    font-size: 14px;

    img{
        
        height: 150px;
        
    }
}
`

export const StyledBtn = styled.button`
display: flex;
justify-content: center;
margin: 6px;
background-color: transparent;
border: none;
cursor: pointer;
`
export const StyledTotalHeader = styled.h3`
display: flex;
justify-content: center;
`
export const StyledTotal = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin: 0 20px;
`
export const StyledBtns = styled.div`
display: flex;
margin-bottom: 30px;
`
export const StyledClearBtn = styled.button`
margin: 5px;
cursor: pointer;
background-color: ${({theme}) => theme.colors.blue};
color: ${({theme}) => theme.colors.white};
border: 1px solid ${({theme}) => theme.colors.green};
border-radius: 10px;
width: 150px;
font-size:20px;
height: 50px;

&:hover {
    background-color: ${({theme}) => theme.colors.tan};
}
`
export const StyledCheckoutBtn = styled(StyledClearBtn)`
background-color: ${({theme}) => theme.colors.green};
color: ${({theme}) => theme.colors.black};
border: 1px solid ${({theme}) => theme.colors.black};

&:hover {
    background-color: ${({theme}) => theme.colors.darkgreen};
}
`
export const StyledBackBtn = styled(StyledCheckoutBtn)`
cursor: pointer;
background-color: ${({theme}) => theme.colors.blue};
color: ${({theme}) => theme.colors.white};
border: none
border-radius: 20px;
width: 150px;
height: 50px;
`