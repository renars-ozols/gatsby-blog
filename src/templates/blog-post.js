import React from "react"
import { graphql } from "gatsby"
import BlogPost from '../components/blog-post/blog-post'

export default ({ data }) => {
  const post = data.markdownRemark
  const backgroundFluidImageStack = [
    `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) )`,
    post.frontmatter.featuredimage.childImageSharp.fluid
  ]

  return (
      <BlogPost 
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={backgroundFluidImageStack}
        imageUrl={post.frontmatter.featuredimage.childImageSharp.fluid.src}
        date={post.frontmatter.date}
        html={post.html}
        author={data.site.siteMetadata.author}
        tags={post.frontmatter.tags}
        slug={post.fields.slug}
      />
  )
}

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id } ) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 1300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        date(formatString: "DD MMMM, YYYY")
        description
        title
        tags
      }
    }
    site {
    siteMetadata {
      author
    }
  }
  }
`
