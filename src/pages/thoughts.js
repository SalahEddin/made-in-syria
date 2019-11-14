import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import BlogSquare from "../components/blogSquare"
import { Link } from "gatsby"

const ThoughtsPage = ({ data }) => (
  <Layout>
    <h1>I like to type</h1>
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
