import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BlogSmallPreviewCard from "../blog-small-preview-card/blog-small-preview-card"
import Heading from "../heading/heading"

const MostPopularPosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: fields___views, order: DESC }
        filter: { fields: { views: { gte: 0 } } }
        limit: 3
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              featuredimage {
                childImageSharp {
                  fixed(width: 100, height: 100) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
            fields {
              slug
              views
            }
          }
        }
      }
    }
  `)
  return (
    <section>
      <Heading h3 uppercase center>
        Most Popular
      </Heading>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <BlogSmallPreviewCard
          key={node.id}
          slug={node.fields.slug}
          title={node.frontmatter.title}
          image={node.frontmatter.featuredimage.childImageSharp.fixed}
        />
      ))}
    </section>
  )
}

export default MostPopularPosts
