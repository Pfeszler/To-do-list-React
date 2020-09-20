import React from "react"
import Input from "../Input"
import { Wrapper } from "./styled"
import useQueryParameter from "../queryHooks/useQueryParameter";
import useReplaceQueryParameter from "../queryHooks/useReplaceQueryParameter"
import searchQueryParamName from "../queryHooks/searchQueryParamName"


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