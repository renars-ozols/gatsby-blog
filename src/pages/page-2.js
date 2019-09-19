import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Lorem from "../components/lorem"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>

    <Lorem />
    <Lorem />
    <Lorem />
    <Lorem />
    <Lorem />
  </Layout>
)

export default SecondPage
