import React from "react"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Heading from '../components/heading/heading'

export default ({ data }) => {
  const post = data.markdownRemark
  const backgroundFluidImageStack = [
    `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) )`,
    post.frontmatter.featuredimage.childImageSharp.fluid
  ]

  return (
    <div>
      <BackgroundImage
       Tag="div"
       fluid={backgroundFluidImageStack}
       style={{ height: `60vh`, textAlign: `center`}}
       >
       <div style={{ position: `absolute`, top: `20%`, left: `50%`, transform:`translateX(-50%)`}}>
       <Heading h1 white>{post.frontmatter.title}</Heading>
       </div>
       </BackgroundImage>
      <div dangerouslySetInnerHTML={{ __html: post.html }} style={{fontSize: `1.5rem`}}/>
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        featuredimage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        date(formatString: "DD MMMM, YYYY")
        description
        title
      }
    }
  }
`
