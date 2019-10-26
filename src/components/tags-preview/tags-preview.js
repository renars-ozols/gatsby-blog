import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Heading from "../heading/heading"
import Tag from "../tag/tag"

import { StyledSection, Wrapper, StyledButton } from "./tags-preview.styles"

const TagsPreview = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        limit: 20
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)

  const {
    allMarkdownRemark: { group },
  } = data

  return (
    <StyledSection>
      <Heading h3 uppercase center>
        Tags
      </Heading>
      <Wrapper>
        {group.map(tag => (
          <Tag key={tag.fieldValue} tag={tag.fieldValue} />
        ))}
        <StyledButton as={Link} to="/tags/">
          all tags
        </StyledButton>
      </Wrapper>
    </StyledSection>
  )
}

export default TagsPreview
