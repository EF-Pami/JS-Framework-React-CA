import React from "react";
import { Rating } from "@mui/material";
import * as S from "../Styles/ProductReviews.styles";

export default function ProductReviews({reviews}) {

    const userReviews = reviews && reviews.map((review) =>{
        return (
            <S.StyledContainer key={review.id}>
                <S.StyledDesc>- {review.description}</S.StyledDesc>
                <S.StyledRating><Rating value={review.rating} max={5} readOnly={true}/></S.StyledRating>
                <S.StyledUsername>{review.username}</S.StyledUsername>
            </S.StyledContainer>
        )
    })

    return (
        <S.styledWrapper>
            {userReviews && userReviews.length > 0 ? (
                userReviews
            ) : (<div>No reviews on this product yet.</div>)}
        </S.styledWrapper>
    )
}