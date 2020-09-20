import React from "react"
import { StyledSection, HeaderContainer, Header, Body } from "./styled"


const Section = ({ title, body, extraHeaderContent }) => (
    <StyledSection>
        <HeaderContainer>
            <Header>
                {title}
            </Header>
            {extraHeaderContent}
        </HeaderContainer>
        <Body>
            {body}
        </Body>

    </StyledSection>
)


export default Section