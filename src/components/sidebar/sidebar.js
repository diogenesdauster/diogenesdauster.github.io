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
              <span className="tags">{`</`}</span>
              {`D.Dauster`}
              <span className="tags">{`>`}</span>
            </a>
          </h1>
          <p className="tagline">Code Has No Accent</p>
        </div>
        <input type="checkbox" id="menu-icon" />
        <label className="menu-label" htmlFor="menu-icon" />
        <div className="trigger">
          <ul className="sidebar-nav">
            <li>
              <Link to="/" className="sidebar-nav-item">
                Home
              </Link>
            </li>
            {menus
              ? menus.map(menu => {
                  const { name } = menu.node.frontmatter
                  const url = `${name.toLowerCase()}`
                  return (
                    <li key={name}>
                      <Link to={url} className="sidebar-nav-item">
                        {name}
                      </Link>
                    </li>
                  )
                })
              : null}
          </ul>
        </div>
        <p className="copyright">
          {' '}
          &copy; {new Date().getFullYear()}. All rights reserved.
        </p>
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
