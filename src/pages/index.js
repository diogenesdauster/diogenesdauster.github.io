import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import Post from '../components/post/post'

const IndexPage = ({ data }) => {
  let posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <div className="posts">
        {posts ? (
          posts.map((post, idx) => (
            <Post
              key={idx}
              url={post.node.fields.slug}
              title={post.node.frontmatter.title}
              date={post.node.frontmatter.postdate}
            >
              <p>{post.node.excerpt}</p>
            </Post>
          ))
        ) : (
          <h1>No Posts</h1>
        )}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(filter: { fields: { layout: { eq: "post" } } }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            postdate: date(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  }
`

export default IndexPage
