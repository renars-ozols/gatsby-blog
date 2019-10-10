import React from 'react'

import Seo from '../seo'
import Heading from '../heading/heading'
import Container from '../container/container'
import TagsContainer from '../tags-container/tags-container'
import Tag from '../tag/tag'
import {StyledBackground, HeadingWrapper, AuthorContainer} from './blog-post.styles'


const BlogPost = ({title, description, image, date, author, html, tags}) => (
    <article>
        <Seo title={title} description={description}/>
        <StyledBackground fluid={image}>
            <HeadingWrapper>
                <Heading h1 white noMargin center>{title}</Heading>
            </HeadingWrapper>
        </StyledBackground>
        <Container>
            <AuthorContainer>
                <span>{date}</span>
                <span>Author: {author}</span>
            </AuthorContainer>
            <div dangerouslySetInnerHTML={{ __html: html }}/>
            <TagsContainer>
                {tags.map(tag => (
                    <Tag key={tag + `tag`} tag={tag}/>
                ))}
            </TagsContainer>
        </Container>
    </article>
)

export default BlogPost