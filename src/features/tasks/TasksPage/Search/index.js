import React from "react"
import useQueryParameter from "../queryHooks/useQueryParameter";
import useReplaceQueryParameter from "../queryHooks/useReplaceQueryParameter"
import searchQueryParamName from "../queryHooks/searchQueryParamName"
import Input from "../Input"
import { Wrapper } from "./styled"



const Search = () => {
    const query = useQueryParameter(searchQueryParamName)
    const replaceQueryParameter = useReplaceQueryParameter()

    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            key: searchQueryParamName,
            value: target.value.trim() !== "" ? target.value : undefined
        })
    };
    return (
        <Wrapper>
            <Input
                placeholder="Filtruj Zadania"
                value={query || ""}
                onChange={onInputChange}
            />
        </Wrapper>
    )
}

export default Search