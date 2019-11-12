import React from "react"
import Seo from "../seo"
import Heading from "../heading/heading"
import TagsContainer from "../tags-container/tags-container"
import Tag from "../tag/tag"
import SocialShare from "../social-share/social-share"
import PrevNext from "../prev-next/prev-next"
import { DiscussionEmbed } from "disqus-react"

import {
  StyledBackground,
  StyledContainer,
  HeadingWrapper,
  StyledSpan,
} from "./blog-post.styles"

const BlogPost = ({
  id,
  title,
  description,
  image,
  imageUrl,
  date,
  html,
  tags,
  twitterHandle,
  url,
  prev,
  next,
}) => {
  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: { identifier: id, title },
  }
  return (
    <article style={{ backgroundColor: `#fff` }}>
      <Seo
        title={title}
        description={description}
        article
        image={imageUrl}
        pageUrl={url}
      />
      <StyledBackground fluid={image}>
        <HeadingWrapper>
          <Heading h1 white noMargin center>
            {title}
          </Heading>
        </HeadingWrapper>
      </StyledBackground>
      <StyledContainer>
        <StyledSpan>{date}</StyledSpan>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <TagsContainer heading>
          {tags.map(tag => (
            <Tag key={tag + `tag`} tag={tag} />
          ))}
        </TagsContainer>
        <SocialShare
          socialConfig={{
            twitterHandle,
            config: {
              url,
              title,
              image: imageUrl,
              description,
            },
          }}
          tags={tags}
        />
        <PrevNext prev={prev} next={next} />
        <DiscussionEmbed {...disqusConfig} />
      </StyledContainer>
    </article>
  )
}

export default BlogPost
