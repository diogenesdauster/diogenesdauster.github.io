import React, { Fragment } from 'react'
import Layout from '../components/layout/layout'
import Page from '../components/page/page'
import { Link, graphql } from 'gatsby'

const Archive = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  const newposts = posts.reduce((previus, current) => {
    if (previus[current.node.frontmatter.postyear]) {
      return previus[current.node.frontmatter.postyear].push({
        postdate: current.node.frontmatter.postdate,
        slug: current.node.fields.slug,
        title: current.node.frontmatter.title,
      })
    }
    console.log(current.node.frontmatter.postyear)
    console.log(previus)
    return Object.assign(
      {},
      {
        ...previus,
        [current.node.frontmatter.postyear]: [
          {
            postdate: current.node.frontmatter.postdate,
            slug: current.node.fields.slug,
            title: current.node.frontmatter.title,
          },
        ],
      }
    )
  }, {})

  console.log(newposts)

  return (
    <Layout>
      <Page title={'Archives'}>
        {posts
          ? posts.map((post, idx) => {
              return (
                <Fragment key={idx}>
                  <h1>{post.node.frontmatter.postyear}</h1>
                  <ul>
                    <li>
                      <p>
                        {post.node.frontmatter.postdate} —{' '}
                        <Link to={post.node.fields.slug}>
                          {post.node.frontmatter.title}
                        </Link>
                      </p>
                    </li>
                  </ul>
                </Fragment>
              )
            })
          : 'No Archives'}
      </Page>
    </Layout>
  )
}
export default Archive

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: ASC }
      filter: { fields: { layout: { eq: "post" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            postdate: date(formatString: "MMMM Do, YYYY")
            postyear: date(formatString: "YYYY")
          }
        }
      }
    }
  }
`
