import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import Page from '../components/page/page'
import NotFoundPage from '../pages/404'

const PageTemplate = ({ data }) => {
  const pages = data.allMarkdownRemark.edges
  const title = data.allMarkdownRemark.edges[0].node.frontmatter.sidebar

  if (!pages || !title) {
    return <NotFoundPage />
  }

  return (
    <Layout>
      <Page title={title}>
        {pages.map((page, idx) => {
          return (
            <div
              key={idx}
              dangerouslySetInnerHTML={{ __html: page.node.html }}
            />
          )
        })}
      </Page>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          frontmatter {
            sidebar
          }
        }
      }
    }
  }
`

export default PageTemplate
