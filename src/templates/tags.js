import React from "react"
import PropTypes from "prop-types"

// Components
import { Link, graphql } from "gatsby"
import Container from '../components/container/container'
import Heading from '../components/heading/heading'
import BlogSmallPreviewCard from '../components/blog-small-preview-card/blog-small-preview-card'
import Button from '../components/button/button'

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <Container as={'section'} paddingTop>
      <Heading h5 >{tagHeader}</Heading>
      <div style={{display: `flex`, flexWrap: `wrap`}}>
        {edges.map(({ node }) => {
          const { slug } = node.fields
          const { title } = node.frontmatter
          const image = node.frontmatter.featuredimage.childImageSharp.fixed
          return (
            <BlogSmallPreviewCard key={slug} slug={slug} image={image} title={title}/>
          )
        })}
      </div>
      {/*
              This links to a page that does not yet exist.
              We'll come back to it!
            */}
      <Button as={Link} to="/tags/" right='true'>All tags</Button>
    </Container>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
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
        }
      }
    }
  }
`