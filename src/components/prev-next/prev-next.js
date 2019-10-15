import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper, StyledLeftLink, StyledRightLink, StyledSpan } from './prev-next.styles'

const PrevNext = ({ prev, next}) => (
    <Wrapper>
        {
            prev && (<StyledLeftLink to={prev.fields.slug}><StyledSpan>&#8592;</StyledSpan>{prev.frontmatter.title}</StyledLeftLink>)
        }
        {
            next && (<StyledRightLink to={next.fields.slug}><StyledSpan>&#8594;</StyledSpan>{next.frontmatter.title}</StyledRightLink>)
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