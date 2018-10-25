import React, { Fragment } from 'react'
import Layout from '../components/layout/layout'
import Page from '../components/page/page'
import { Link, graphql } from 'gatsby'

const Archive = ({ data }) => {
  const posts = createPosts(data.allMarkdownRemark.edges)

  return (
    <Layout>
      <Page title={'Archives'}>
        {posts
          ? Object.keys(posts)
              .sort((a, b) => b - a)
              .map(year => {
                return (
                  <Fragment key={year}>
                    <h1>{year}</h1>
                    <ul>
                      {posts[year].map((post, idx) => {
                        return (
                          <li key={idx}>
                            <p>
                              {post.postdate} —{' '}
                              <Link to={post.slug}>{post.title}</Link>
                            </p>
                          </li>
                        )
                      })}
                    </ul>
                  </Fragment>
                )
              })
          : 'No Archives'}
      </Page>
    </Layout>
  )
}

function createPosts(data) {
  if (data && data[0].node) {
    return data.reduce((previus, current) => {
      const {
        node: {
          frontmatter: { postyear, postdate, title },
          fields: { slug },
        },
      } = current

      if (previus[postyear]) {
        previus[postyear].push({
          postdate: postdate,
          slug: slug,
          title: title,
        })
        return previus
      }
      return {
        ...previus,
        [postyear]: [
          {
            postdate: postdate,
            slug: slug,
            title: title,
          },
        ],
      }
    }, {})
  }

  return null
}

export default Archive

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
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
