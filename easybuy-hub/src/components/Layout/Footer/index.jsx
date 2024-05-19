import { Link } from "react-router-dom";
import { styledFooter } from "../../Styles/Footer.styles";

export default function Footer() {
    return (
        <styledFooter>
            <p>&copy; EF Pami 2024 |</p>
            <Link to="/">EasyBuy-Hub</Link>
        </styledFooter>
    )
}