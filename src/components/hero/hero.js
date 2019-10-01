import React from "react"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import { Wrapper } from "./hero.styles"

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
      return (
        <Wrapper>
          <BackgroundImage
            Tag="div"
            fluid={imageData}
            style={{ height: `100%`}}
          ></BackgroundImage>
        </Wrapper>
      )
    }}
  />
)

export default Hero
