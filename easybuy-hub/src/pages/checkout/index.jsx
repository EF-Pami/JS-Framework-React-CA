import CartItems from "../../components/Cart";
import { styledHeader } from "../../components/Styles/Cart.styles";
import { useEffect } from "react";

export default function Checkout() {
    useEffect(() => {
        document.title = "EasyBuy-Hub | checkout";
    }, []);

    return (
        <div>
            <styledHeader>My Cart</styledHeader>
            <CartItems />
        </div>
    )
}