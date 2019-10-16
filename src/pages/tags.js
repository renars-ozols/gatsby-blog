import React from "react"
import PropTypes from "prop-types"

// Components
import { graphql } from "gatsby"
import Seo from '../components/seo'
import Container from '../components/container/container'
import Heading from '../components/heading/heading'
import TagsContainer from '../components/tags-container/tags-container'
import Tag from '../components/tag/tag'

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
  },
}) => (
  <Container>
    <Seo title="Tags" />
    <Heading h2 center noMargin uppercase>
      Tags
    </Heading>
      <TagsContainer noBorder>
        {group.map(tag => (
            <Tag key={tag.fieldValue} tag={tag.fieldValue} count={tag.totalCount}/>
        ))}
      </TagsContainer>
  </Container>
)

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`