import React from 'react'

import {Wrapper, StyledImg, StyledSpan} from './blog-preview-card.styles'
import Heading from "../heading/heading"

const BlogPreviewCard = ({title, date, slug, image, excerpt, author }) => (
    <Wrapper>
        <StyledImg fluid={image}/>
        <Heading h5 center uppercase>{title}</Heading>
        <StyledSpan>{date}</StyledSpan>
        <p>{excerpt}</p>
    </Wrapper>
)

export default BlogPreviewCard