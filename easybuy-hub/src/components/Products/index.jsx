import React from "react";
import ProductCart from "../ProductCard";
import { ProductsContainer } from "../Styles/Products.styles";

export default function Products({products}) {
    return (
        <ProductsContainer>
            {products.map((product) => (
                <ProductCart key={product.id} product={product} />
            ))}
        </ProductsContainer>
    )
}