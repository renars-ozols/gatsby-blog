import React from 'react'

import {kebabCase} from 'lodash'

import {StyledLink} from './tag.styles'

const Tag = ({tag, count}) => (
    <StyledLink to={`/tags/${kebabCase(tag)}/`}>{tag} {count ? <span>({count})</span> : null}</StyledLink>
)

export default Tag