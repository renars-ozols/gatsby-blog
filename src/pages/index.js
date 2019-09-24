import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Hero from "../components/hero/hero"
import BlogRoll from "../components/blog-roll/blog-roll"
import Image from "../components/image"
import Lorem from "../components/lorem"

const IndexPage = data => (
  <div>
    <SEO title="Home" />
    <Hero />
    <BlogRoll />
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
  </div>
)

export default IndexPage
