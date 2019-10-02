import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Hero from "../components/hero/hero"
import Container from '../components/container/container'
import BlogRoll from "../components/blog-roll/blog-roll"
import PopularPosts from '../components/popular-posts/popular-posts'
import Image from "../components/image"
import Lorem from "../components/lorem"

const IndexPage = data => (
  <>
    <SEO title="Home" />
    <Hero />
    <Container>
      <BlogRoll />
      <PopularPosts/>
    </Container>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <Lorem />
    <Lorem />
    <Lorem />
    <Lorem />
    <Lorem />
  </>
)

export default IndexPage
