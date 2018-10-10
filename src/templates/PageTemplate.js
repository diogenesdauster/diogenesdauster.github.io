import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import Page from '../components/page/page'

const PageTemplate = ({ data }) => {
  const post = data.markdownRemark
  console.log(data)
  return (
    <Layout>
      <Page title={post.frontmatter.title}>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Page>
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

export default PageTemplate
