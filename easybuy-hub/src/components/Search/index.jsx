import React from "react";
import { Search } from "@mui/icons-material";
import * as S from "../Styles/Search.styles";

/**
 * this code action will build the search bar and permit users to search for items
 */

export default function SearchBar ({searchInput, onSearchInputChange, filteredProducts}) {
    
    function onChange (event) {
        onSearchInputChange(event.currentTarget.value)
    }

    return (
        <S.StyledSearch>
            <S.StyledInputWrapper>
                <Search
                    fontSize="large"
                    sx={{color: "black"}}
                />
                <S.StyledInput
                    onChange={onChange}
                    value={searchInput}
                    placeholder="Search item"
                />
            </S.StyledInputWrapper>
            <S.StyledSearchResults>
                {filteredProducts.map((item) => (
                    <S.StyledSearchedItem to={`/product/${item.id}`} key={item.id}>
                        {item.title}
                    </S.StyledSearchedItem>
                ))}
            </S.StyledSearchResults>
        </S.StyledSearch>
    )
}