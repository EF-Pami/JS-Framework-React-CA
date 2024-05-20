import { Link } from "react-router-dom";
import { StyledFooter } from "../../Styles/Footer.styles";

export default function Footer() {
    return (
        <StyledFooter>
            <p>&copy; EF Pami 2024 |</p>
            <Link to="/">EasyBuy-Hub</Link>
        </StyledFooter>
    )
}