import React from "react"
import {StyledHeader, Title} from "./styled"


const Header = ({ title }) => (
    <StyledHeader
        className="header"
    >
        <Title>
            {title}
        </Title>
    </StyledHeader>
)

export default Header