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
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, limit: 3) {
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
        excerpt(pruneLength: 300)
      }
    }
  }
  site {
    siteMetadata {
      author
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
              <BlogPreviewCard key={node.id} 
              image={node.frontmatter.featuredimage.childImageSharp.fluid} 
              author={data.site.siteMetadata.author} 
              title={node.frontmatter.title}
              date={node.frontmatter.date}
              excerpt={node.excerpt}
              slug={node.fields.slug}
              />
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
