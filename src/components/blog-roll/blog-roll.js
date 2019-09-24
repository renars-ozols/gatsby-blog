import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import Heading from "../heading/heading"

import { Wrapper } from "./blog-roll.styles"

const BlogRoll = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
          edges {
            node {
              id
              frontmatter {
                title
                date(formatString: "DD MMMM, YYYY")
                description
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
      return (
        <Wrapper>
          <Heading h2 center noMargin uppercase>
            Latest posts
          </Heading>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
            </div>
          ))}
        </Wrapper>
      )
    }}
  />
)

export default BlogRoll
