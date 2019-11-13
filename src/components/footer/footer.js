import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import {
  StyledFooter,
  Wrapper,
  Content,
  StyledContent,
  StyledLink,
  StyledP,
} from "./footer.styles"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo2.png" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  return (
    <StyledFooter>
      <Img
        fixed={data.file.childImageSharp.fixed}
        style={{ display: `block`, margin: `0 auto` }}
      />
      <Wrapper>
        <Content>
          <StyledLink to={"/"}>Home</StyledLink>
          <StyledLink to={"/#most-popular"}>Most Popular</StyledLink>
          <StyledLink to={"/#about"}>About</StyledLink>
          <StyledLink to={"/contact"}>Contact</StyledLink>
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
}

export default Footer
