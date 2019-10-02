import React from 'react'

import Seo from '../seo'
import Heading from '../heading/heading'
import {StyledBackground, HeadingWrapper, Content, AuthorContainer} from './blog-post.styles'


const BlogPost = ({title, description, image, date, author, html}) => (
    <article>
        <Seo title={title} description={description}/>
        <StyledBackground fluid={image}>
            <HeadingWrapper>
                <Heading h1 white noMargin center>{title}</Heading>
            </HeadingWrapper>
        </StyledBackground>
        <AuthorContainer>
            <span>{date}</span>
            <span>Author: {author}</span>
        </AuthorContainer>
        <Content dangerouslySetInnerHTML={{ __html: html }}/>
    </article>
)

export default BlogPost