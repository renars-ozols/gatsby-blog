import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper, StyledPrevLink, StyledNextLink, StyledSpan } from './prev-next.styles'

const PrevNext = ({ prev, next}) => (
    <Wrapper>
        {
            prev && (<StyledPrevLink to={prev.fields.slug}><StyledSpan>&#8592;</StyledSpan>{prev.frontmatter.title}</StyledPrevLink>)
        }
        {
            next && (<StyledNextLink to={next.fields.slug}><StyledSpan>&#8594;</StyledSpan>{next.frontmatter.title}</StyledNextLink>)
        }
    </Wrapper>
)

PrevNext.propTypes = {
    prev: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({
            fields: PropTypes.shape({
                slug: PropTypes.string.isRequired
            }),
            frontmatter: PropTypes.shape({
                title: PropTypes.string.isRequired
            })
        })
    ]).isRequired,
    get next() {
        return this.prev
    }
}

export default PrevNext