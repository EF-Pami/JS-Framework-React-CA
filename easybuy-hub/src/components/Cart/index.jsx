import React from "react";
import { useCart } from "../../zustandHook/cartstore";
import { Link } from "react-router-dom";
import * as S from "../Styles/Cart.styles";
import { Add } from "@mui/icons-material";
import { Remove } from "@mui/icons-material";
import { Clear } from "@mui/icons-material";


export default function CartItems() {
    const {cart, add, decrease, remove, clearCart} = useCart();

    return (
        <S.StyledWrapper>
            <S.StyledContainer>
                {cart.length > 0 ? (
                <>
                    <div>
                        {cart.map((id) => {
                            const product = cart.find(
                                (addedProducts) => addedProducts === id
                            );
                            return (
                                <S.StyledItem key={product.id}>
                                    <S.StyledBtn onClick={() => remove(product.id)}><Clear /></S.StyledBtn>
                                    <img
                                        src={product.image.url}
                                        alt={product.title}
                                    />
                                        <p>{product.title}</p>
                                        <p>USD {product.discountedPrice},-</p>
                                        <S.StyledBtn onClick={() => decrease(product.id)}><Remove /></S.StyledBtn>
                                        <span>{product.totalItems}</span>
                                        <S.StyledBtn onClick={() => add(product.id)}><Add /></S.StyledBtn>
                                </S.StyledItem>
                            );
                        })}
                    </div>
                    <div>
                        <S.StyledTotalHeader>Order Details</S.StyledTotalHeader>
                    <S.StyledTotal>
                        <p>Discount:</p> USD {" "}
                        {cart
                        .reduce(
                            (totalSaved, cart) =>
                            totalSaved +
                            (cart.price - cart.discountedPrice / cart.totalItems) *
                                cart.totalItems, 0).toFixed(2)}{",-"}
                    </S.StyledTotal>
                    </div>
                    <div>
                        <S.StyledTotal>
                            <p>Total Amount:</p> USD {" "}
                            {cart
                            .reduce(
                                (totalSum, cart) =>
                                totalSum +
                                (cart.discountedPrice / cart.totalItems) *
                                    cart.totalItems, 0).toFixed(2)}{",-"}
                        </S.StyledTotal>
                    </div>
                    <S.StyledBtns>
                        <S.StyledClearBtn onClick={() => clearCart()} >Clear cart</S.StyledClearBtn>
                        <Link to="/CheckoutSuccess">
                            <S.StyledCheckoutBtn onClick={() => clearCart()} >Checkout</S.StyledCheckoutBtn>
                        </Link>
                    </S.StyledBtns>
                </>
                ) : (
                <div>
                    <S.StyledWrapper>Your cart is empty.</S.StyledWrapper>
                    <S.StyledWrapper>
                        <Link to="/">
                            <S.StyledBackBtn>
                                Back to Shopping
                            </S.StyledBackBtn>
                        </Link>
                    </S.StyledWrapper>
                </div>
                )}
            </S.StyledContainer>
        </S.StyledWrapper>
    );
}