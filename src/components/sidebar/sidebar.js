import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'

export const PureSidebar = ({ data }) => {
  const menus = data.allMarkdownRemark.edges
  return (
    <div className="sidebar">
      <div className="container sidebar-sticky">
        <div className="sidebar-about">
          <h1>
            <a href="/">
              <span role="img" aria-label="emoji">
                👨🏻‍💻{' '}
              </span>
              <span>{`</`}</span>
              {`Diógenes Dauster`}
              <span>{`>`}</span>
            </a>
          </h1>
          <p className="lead">Code Has No Accent</p>
        </div>

        <nav className="sidebar-nav">
          <Link to="/" className="sidebar-nav-item">
            Home
          </Link>
          {menus
            ? menus.map(menu => {
                const { name } = menu.node.frontmatter
                const url = `${name.toLowerCase()}`
                return (
                  <Link to={url} key={name} className="sidebar-nav-item">
                    {name}
                  </Link>
                )
              })
            : null}
        </nav>
        <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
      </div>
    </div>
  )
}

export const Sidebar = props => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { layout: { eq: "sidebar" } } }
          sort: { fields: frontmatter___name, order: ASC }
        ) {
          edges {
            node {
              frontmatter {
                name
              }
            }
          }
        }
      }
    `}
    render={data => <PureSidebar {...props} data={data} />}
  />
)

export default Sidebar
