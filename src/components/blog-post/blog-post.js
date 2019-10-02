import React from 'react'

import Seo from '../seo'
import Heading from '../heading/heading'
import {StyledBackground, HeadingWrapper, Content, StyledDate} from './blog-post.styles'


const BlogPost = ({title, description, image, date, html}) => (
    <article>
        <Seo title={title} description={description}/>
        <StyledBackground fluid={image}>
            <HeadingWrapper>
                <Heading h1 white noMargin center>{title}</Heading>
            </HeadingWrapper>
        </StyledBackground>
        <StyledDate as='div'>{date}</StyledDate>
        <Content dangerouslySetInnerHTML={{ __html: html }}/>
    </article>
)

export default BlogPost