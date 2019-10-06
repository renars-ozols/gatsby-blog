import React from 'react'
import {Link} from 'gatsby'
import toKebabCase from '../../utils/toKebabCase'

import Seo from '../seo'
import Heading from '../heading/heading'
import {StyledBackground, HeadingWrapper, Content, AuthorContainer} from './blog-post.styles'


const BlogPost = ({title, description, image, date, author, html, tags}) => (
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
        <ul>
            {tags.map(tag => (
                <li key={tag + `tag`}>
                    <Link to={`/tags/${toKebabCase(tag)}/`}>{tag}</Link>
                </li>  
            ))}
        </ul>
    </article>
)

export default BlogPost