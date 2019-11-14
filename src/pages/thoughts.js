import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import BlogSquare from "../components/blogSquare"
import SEO from "../components/seo"

const ThoughtsPage = ({ data }) => (
  <Layout>
    <SEO title="Blog" />
    {data.allMarkdownRemark.edges.map(post => (
      <BlogSquare
        key={post.node.id}
        title={post.node.frontmatter.title}
        date={post.node.frontmatter.date}
        path={post.node.frontmatter.path}
        description={post.node.frontmatter.description}
      />
    ))}
  </Layout>
)

export const allBlogsQuery = graphql`
  query AllBlogPosts {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            date
            description
            path
            title
          }
        }
      }
    }
  }
`
export default ThoughtsPage
