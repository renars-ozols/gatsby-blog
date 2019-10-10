import React from 'react'

import {kebabCase} from 'lodash'

import {StyledListItem, StyledLink} from './tag.styles'

const Tag = ({tag}) => (
    <StyledListItem><StyledLink to={`/tags/${kebabCase(tag)}/`}>{tag}</StyledLink></StyledListItem>
)

export default Tag