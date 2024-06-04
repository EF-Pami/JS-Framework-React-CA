import styled from "styled-components";
import { Link} from "react-router-dom";

export const ProductsContainer = styled.ul`
display: flex;
justify-content: center;
flex-wrap: wrap;
padding: 0 4rem;
margin-bottom: 80px;
`;

export const ProductWrapper = styled.div`
border: 1px solid white;
border-radius: 2rem;
list-style: none;
width: 250px;
height: 400px;
margin: 2rem;
box-shadow: rgba(47, 0, 255, 0.2) 0px 8px 24px;
display: flex;
flex-direction: column;
justify-content: space-between;

@media (max-width: 768px) {
    max-width: 45%;
}

@media (max-width: 480px) {
    max-width: 100%;
    margin: 1rem 0;
}

`;

export const ProductTitle = styled.div`
display:flex;
justify-content: space-around;
align-items: center;
padding: 0 1rem;
`;

export const ProductHeading = styled.h4`
margin: 5px 10px;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
flex: 1;
`;

export const ProductImageContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 235px;
`;

export const ProductImage = styled.img`
border-radius: 2rem 2rem 0 0;
width: 100%;
height: 100%;
object-fit: cover;
`;

export const ProductRating = styled.div`
display: flex;
align-self: center;
`;

export const ProductPrice = styled.div`
color: ${(props) => (props.isValid? 'black' : 'red')};
text-decoration: ${(props) => (props.isValid? 'none' : 'line-through')};
`;

export const ProductPrices = styled.div`
display: flex;
justify-content: space-between;
padding: 10px;
`;

export const ProductButtons = styled(ProductPrices)`
justify-content: space-around;
`;

export const ProductAddButton = styled.button`
background-color: ${({theme}) => theme.colors.green};
color: ${({theme}) => theme.colors.black};
border: none;
border-radius: 6px;
font-size: 16px;
font-weight: bold;
cursor: pointer;
padding: 10px;

&:hover {
    background-color: ${({theme}) => theme.colors.darkgreen};
}
`;

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

export const ProductsView = styled(Link)`
border-radius: 6px;
background-color: ${({theme}) => theme.colors.blue};
padding: 2px;
color: ${({theme}) => theme.colors.white};
text-decoration: none;
font-size: 16px;
font-weight: bold;
cursor: pointer;
padding: 10px;

&:hover {
    background-color: ${({theme}) => theme.colors.tan};
}
`