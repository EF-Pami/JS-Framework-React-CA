import React from "react";
import { StyledWrapper } from "../Styles/Success.styles";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { ArrowBackIosNew } from "@mui/icons-material";

export default function CheckoutMessage() {
    return (
        <StyledWrapper>
            <CheckCircle fontSize="large" style={{color: 'limegreen'}}/>
            <h1>Thanks for shopping with EasyBuy-Hub</h1>
            <p>Your Order number: E000B012H</p>
            <p>Check your email for more information on order confirmation and delivery</p>
            <Link to="/" style={{ textDecoration: 'none'}}>
                <button><ArrowBackIosNew />Continue Shopping</button>
            </Link>
        </StyledWrapper>
    )
}