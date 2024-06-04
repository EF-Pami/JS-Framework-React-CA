import React, { useEffect, useState } from "react";
import * as S from "../Styles/ViewProduct.styles";
import * as R from "../Styles/ProductReviews.styles";
import { Rating } from "@mui/material";
import ProductReviews from "../ProductReviews";
import { useCart } from "../../zustandHook/cartstore";

export default function ViewProduct ({product}) {

    const {
        id,
        title,
        image,
        description,
        price,
        discountedPrice,
        rating,
        reviews
    } = product;
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        document.title = `EasyBuy-Hub | ${title}`;
    }, [title])

    const {addToCart} = useCart();
    function handleATCBtn() {
        addToCart(product);
        setShowMessage(true);
        setTimeout(() => {
            setShowMessage(false);
        }, 5000);
    }
    const discount = price !== discountedPrice &&
        Math.trunc((100* (price - discountedPrice) / price));
    const showDiscount = price !== discountedPrice && discount + "%";

return (
    <S.StyledViewProduct key={id}>
        <S.StyledContainer>
            <S.StyledInfoContainer>
                {image && image.url ? (
                    <S.StyledImg src={image.url} alt={title} />
                ): (
                    <div>No image available</div>
                )}
                 
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
            <R.StyledProductReviews>
                <h3>Reviews</h3>
                <ProductReviews reviews={reviews} />
            </R.StyledProductReviews>
        </S.StyledContainer>
        {showMessage && <S.StyledMessage>Item added to cart</S.StyledMessage>}
    </S.StyledViewProduct>
)
}