import styled from "styled-components";
import { Link} from "react-router-dom";

export const ProductsContainer = styled.ul`
display: flex;
justify-content: center;
flex-wrap: wrap;
padding: 0 4rem;
`;

export const ProductWrapper = styled.div`
border: 1px solid white;
border-radius: 2rem;
list-style: none;
width: 250px;
margin: 2rem;
box-shadow: rgba(47, 0, 255, 0.2) 0px 8px 24px;
`;

export const ProductTitle = styled.div`
display:flex;
justify-content: space-around;
`;

export const ProductHeading = styled.h4`
margin: 5px 10px;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
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
`;

export const ProductsView = styled(Link)`
border-radius: 5px;
border: ${({theme}) => theme.colors.green} 1px solid;
padding: 2px;
color: ${({theme}) => theme.colors.green};
text-decoration: none;
font-size: 16px;
font-weight: bold;
cursor: pointer;
`