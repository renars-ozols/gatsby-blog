import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Heading from "../heading/heading"
import Img from "gatsby-image"

import { StyledSection, Wrapper, TextWrapper } from "./about.styles"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "chill-guy.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <StyledSection>
      <Heading h3 uppercase center>
        About me
      </Heading>
      <Wrapper>
        <Img fluid={data.file.childImageSharp.fluid} />
        <TextWrapper>
          <Heading h5>John Doe</Heading>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam
            quam nulla porttitor massa id neque aliquam vestibulum morbi.
            Sagittis id consectetur purus ut faucibus pulvinar. Ut morbi
            tincidunt augue interdum velit euismod in pellentesque massa. Arcu
            cursus vitae congue mauris rhoncus aenean vel elit. A cras semper
            auctor neque vitae tempus quam. Ullamcorper dignissim cras tincidunt
            lobortis feugiat vivamus at. Ipsum nunc aliquet bibendum enim
            facilisis gravida. Ac auctor augue mauris augue neque gravida in
            fermentum.
          </p>
        </TextWrapper>
      </Wrapper>
    </StyledSection>
  )
}

export default About
