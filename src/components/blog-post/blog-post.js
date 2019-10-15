import React from 'react'

import Seo from '../seo'
import Heading from '../heading/heading'
import Container from '../container/container'
import TagsContainer from '../tags-container/tags-container'
import Tag from '../tag/tag'
import SocialShare from '../social-share/social-share'

import {StyledBackground, HeadingWrapper, AuthorContainer} from './blog-post.styles'


const BlogPost = ({title, description, image, imageUrl, date, author, html, tags, twitterHandle, url}) => (
    <article>
        <Seo title={title} description={description} article image={imageUrl} pageUrl={url}/>
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
            <SocialShare socialConfig={{
                twitterHandle,
                config: {
                    url,
                    title,
                    image: imageUrl
                },
            }}
            tags={tags}/>
        </Container>
    </article>
)

export default BlogPost