import CheckoutMessage from "../../components/CheckoutSuccess";
import { useEffect } from "react";

export default function CheckoutSuccess() {

    useEffect(() => {
        document.title = "EasyBuy-Hub | checkout success";
    }, []);

    return (
        <div>
            <CheckoutMessage />
        </div>
    )
}