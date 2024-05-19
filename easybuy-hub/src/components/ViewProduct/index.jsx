import React, { useEffect } from "react";
import * as S from "../Styles/ViewProduct.styles";
import * as R from "../Styles/ProductReviews.styles";
import { Rating } from "@mui/material";
import ProductReviews from "../ProductReviews";
import { useCart } from "../../zustandHook/cartstore";

export default function ViewProduct ({product}) {

    const {
        id,
        title,
        description,
        price,
        discountedPrice,
        rating,
        reviews
    } = product;

    useEffect(() => {
        document.title = `EasyBuy-Hub | ${title}`;
    }, [title])

    const {addToCart} = useCart();
    function handleATCBtn() {
        addToCart(product);
    }
    const discount = price !== discountedPrice &&
        Math.trunc((100* (price - discountedPrice) / price));
    const showDiscount = price !== discountedPrice && discount + "%";

return (
    <S.StyledViewProduct key={id}>
        <S.styledContainer>
            <S.StyledInfoContainer>
                <S.styledImg src={imageUrl} alt={title} />
                <S.StyledProductInfo>
                    {discount !== showDiscount && (
                        <S.CalDiscount>
                            {showDiscount}
                        </S.CalDiscount>
                    )}

                        <h2>{title}</h2>
                        <div>
                            <Rating
                            value ={rating}
                            max={5}
                            readOnly={true}/>
                        </div>
                        <div>{description}</div>
                        <S.StyledPriceContainer>
                            <div>{discountedPrice < price && discountedPrice},-</div>
                            <S.StyledPrice isValid={price === discountedPrice}>{price},-</S.StyledPrice>
                        </S.StyledPriceContainer>
                        <S.StyledBtn onClick={() => handleATCBtn()}>Add to Cart</S.StyledBtn>
                </S.StyledProductInfo>
            </S.StyledInfoContainer>
            <R.styledProductReviews>
                <h3>Reviews</h3>
                <ProductReviews reviews={reviews} />
            </R.styledProductReviews>
        </S.styledContainer>
    </S.StyledViewProduct>
)
}