import React from "react"
import { StyledSection, HeaderContainer, Header } from "./styled"


const Section = ({ title, body, extraHeaderContent }) => (
    <StyledSection>
        <HeaderContainer>
            <Header>
                {title}
            </Header>
            {extraHeaderContent}
        </HeaderContainer>
        <div>
            {body}
        </div>

    </StyledSection>
)


export default Section