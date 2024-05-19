import React from "react";
import { styledError } from "../Styles/Error.styles";
import { Error } from "@mui/icons-material";

export default function ErrorMessage() {
    return (
        <styledError>
            <Error fontSize="large" />
            Error loading data, please try again
        </styledError>
    )
}
