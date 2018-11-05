import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import Post from '../components/post/post'
import NotFoundPage from '../pages/404'

const PostTemplate = ({ data, layoutData }) => {
  const post = data.markdownRemark

  return (
    <Layout data={layoutData}>
      {post ? (
        <Post title={post.frontmatter.title}>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Post>
      ) : (
        <NotFoundPage />
      )}
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default PostTemplate
