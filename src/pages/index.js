import React from "react"
import { Link } from "gatsby"

import Hero from "../components/hero/hero"
import Image from "../components/image"
import SEO from "../components/seo"
import Lorem from "../components/lorem"

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <Hero />
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
