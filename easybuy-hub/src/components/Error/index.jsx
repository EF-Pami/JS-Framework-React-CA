import React from "react";
import { StyledError } from "../Styles/Error.styles";
import { Error } from "@mui/icons-material";

export default function ErrorMessage() {
    return (
        <StyledError>
            <Error fontSize="large" />
            Error loading data, please try again
        </StyledError>
    )
}
