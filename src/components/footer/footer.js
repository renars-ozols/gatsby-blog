import React from "react"
import Heading from "../heading/heading"

import {
  StyledFooter,
  Wrapper,
  Content,
  StyledContent,
  StyledLink,
  StyledP,
} from "./footer.styles"

const Footer = () => (
  <StyledFooter>
    <Heading h3 center uppercase white>
      Logo
    </Heading>
    <Wrapper>
      <Content>
        <StyledLink to={"/"}>Home</StyledLink>
        <StyledLink to={"/"}>Categories</StyledLink>
        <StyledLink to={"/"}>About</StyledLink>
        <StyledLink to={"/"}>Contact</StyledLink>
      </Content>
      <StyledContent>
        <StyledP>
          Built and designed by Renars for his portfolio.
          <br />
          <span>© {new Date().getFullYear()}, Renars</span>
        </StyledP>
      </StyledContent>
    </Wrapper>
  </StyledFooter>
)

export default Footer
