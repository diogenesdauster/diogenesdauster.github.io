import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import Post from '../components/post/post'
import NotFoundPage from '../pages/404'

const PostTemplate = ({ data }) => {
  const post = data.markdownRemark

  if (!post) {
    return <NotFoundPage />
  }

  return (
    <Layout>
      <Post title={post.frontmatter.title}>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Post>
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
