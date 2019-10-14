import React from 'react'

import {StyledLink, StyledImg} from './blog-small-preview-card.styles'

const BlogSmallPreviewCard = ({slug, title, image}) => (
    <StyledLink to={slug}><StyledImg fixed={image}/>{title}</StyledLink>
)

export default BlogSmallPreviewCard