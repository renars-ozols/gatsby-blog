import React from "react"

import SEO from "../components/seo"
import Hero from "../components/hero/hero"
import Container from "../components/container/container"
import BlogRoll from "../components/blog-roll/blog-roll"
import MostPopularPosts from "../components/most-popular-posts/most-popular-posts"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Hero />
    <Container>
      <BlogRoll />
      <MostPopularPosts/>
    </Container>
  </>
)

export default IndexPage
