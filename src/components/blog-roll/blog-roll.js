import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import Heading from "../heading/heading"
import BlogPreviewCard from '../blog-preview-card/blog-preview-card'

import { Wrapper } from "./blog-roll.styles"

const BlogRoll = () => (
  <StaticQuery
    query={graphql`
      query {
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "DD MMMM, YYYY")
          description
          featuredimage {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        fields {
          slug
        }
        excerpt(truncate: true)
      }
    }
  }
}
    `}
    render={data => {
        console.log(data)
      return (
        <Wrapper>
          <Heading h2 center noMargin uppercase>
            Latest posts
          </Heading>
          {data.allMarkdownRemark.edges.map(({ node }) => (
              <BlogPreviewCard key={node.id}/>
    //         <div key={node.id}>
    // {node.frontmatter.featuredimage ?         <Img
    //     fluid={node.frontmatter.featuredimage.childImageSharp.fluid}
    //   /> : null}
    //           <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
    //         </div>
          ))}
        </Wrapper>
      )
    }}
  />
)

export default BlogRoll
