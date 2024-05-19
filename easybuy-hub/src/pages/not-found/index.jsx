import React, { useEffect} from "react";
import { styledNotFound } from "../../components/Styles/NotFound.styles";
import { Block } from "@mui/icons-material";

export default function NotFound() {
     useEffect(() => {
        document.title = "EasyBuy-Hub | Page not found";
     }, [])

     return (
        <styledNotFound>
            <div><Block fontSize="large" style={{color: 'red'}}/></div>
            <h1>Page not found</h1>
            <p>The page seems to have a broken link, please check your browser and try again.</p>
        </styledNotFound>
     )
}