import React from "react"

import SEO from "../components/seo"
import Hero from "../components/hero/hero"
import Container from "../components/container/container"
import BlogRoll from "../components/blog-roll/blog-roll"
import MostPopularPosts from "../components/most-popular-posts/most-popular-posts"
import About from "../components/about/about"
import TagsPreview from "../components/tags-preview/tags-preview"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Hero />
    <Container flex>
      <BlogRoll />
      <MostPopularPosts />
      <About />
      <TagsPreview />
    </Container>
  </>
)

export default IndexPage
