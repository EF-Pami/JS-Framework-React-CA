import React, {useState} from "react";
import { StyledNav } from "../../Styles/Nav.styles";
import { NavLink } from "react-router-dom";
import CartIcon from "../Card";
import { Menu } from "@mui/icons-material";

export default function Nav() {
    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    };
    return (
        <StyledNav>
            <div className="container">
                <div className="logo">
                    <NavLink to="/"><img src="/images/EBlogo.jpg" alt="logo"/></NavLink>
                </div>
            <div className="menu" onClick={handleShowNavbar}>
                <Menu style={{color: 'black'}} fontSize="large"/>
            </div>
            <div className={`nav-elements ${showNavbar ? 'active': ''}`}>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                    <li className="CartIcon">
                        <NavLink to="/checkout"><CartIcon /></NavLink>
                    </li>
                </ul>
            </div>
            </div>
        </StyledNav>
    )
}