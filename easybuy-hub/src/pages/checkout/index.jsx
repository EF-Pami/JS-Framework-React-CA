import CartItems from "../../components/Cart";
import { StyledHeader } from "../../components/Styles/Cart.styles";
import { useEffect } from "react";

export default function Checkout() {
    useEffect(() => {
        document.title = "EasyBuy-Hub | checkout";
    }, []);

    return (
        <div>
            <StyledHeader>My Cart</StyledHeader>
            <CartItems />
        </div>
    )
}