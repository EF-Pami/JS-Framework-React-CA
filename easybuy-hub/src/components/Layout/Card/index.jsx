import { ShoppingCart } from "@mui/icons-material"
import { useCart } from "../../../zustandHook/cartstore"

export default function CartIcon() {
    const {cart} = useCart();

return (
    <div>
        <ShoppingCart fontSize="large" style={{color: 'black'}}/>
        <span>
            <span>{cart.reduce((totalQty, cart) => totalQty + cart.totalItems, 0)}</span>
        </span>
    </div>
)
}