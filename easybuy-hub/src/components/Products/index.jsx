import React from "react";
import ProductCart from "../ProductCard";
import { ProductsContainer } from "../Styles/Products.styles";

export default function Products({products}) {
    
    if (!Array.isArray(products)) {
        console.error("products is not an array:", products);
        return null;
    }
    console.log(products);
    return (
        <ProductsContainer>
            {products.map((product) => (
            <ProductCart key={product.id} product={product} />
            ))}
        </ProductsContainer>
    )
}
