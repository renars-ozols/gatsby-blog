import React from "react"
import { graphql, StaticQuery } from "gatsby"

import { StyledBg } from "./hero.styles"

const Hero = () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "hero2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.file.childImageSharp.fluid
      return <StyledBg Tag="section" fluid={imageData} />
    }}
  />
)

export default Hero
