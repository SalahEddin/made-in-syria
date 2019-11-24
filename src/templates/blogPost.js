import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "./blogPost.css"

export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <h1
        style={{
          marginTop: "20px",
        }}
      >
        {post.frontmatter.title}
      </h1>
      <h4 className="date__text">Posted {post.frontmatter.date}</h4>
      <div
        className="post__div"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        description
        path
        title
      }
    }
  }
`
