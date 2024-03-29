import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>User Experience is essential for digital transformation</h1>
    <p>Get to know the UX Team, our process, and some of our latest work at the DTC New Orleans Digital Transformation Center.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Watch the Video</Link>
  </Layout>
)

export default IndexPage
