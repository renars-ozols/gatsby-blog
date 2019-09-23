import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Lorem from "../components/lorem"

const SecondPage = () => (
  <div>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>

    <Lorem />
    <Lorem />
    <Lorem />
    <Lorem />
    <Lorem />
  </div>
)

export default SecondPage
