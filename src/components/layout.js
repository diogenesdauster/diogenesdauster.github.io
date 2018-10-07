import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>

            <div className="sidebar">
              <div className="container sidebar-sticky">
                <div className="sidebar-about">
                  <h1>👨🏻‍💻 Diogenes Dauster</h1>
                  <h2 className="tagline">Code has no accent</h2>
                </div>
                <input type="checkbox" id="menu-icon"/>
                <label className="menu-label" htmlFor="menu-icon"></label>
                <div className="trigger">
                  <ul className="sidebar-nav">
                    <li className="sidebar-nav-item">
                      <a href="/">Home</a>
                    </li>        
                    <li className="sidebar-nav-item">
                      <a href="/about/">About</a>
                    </li>
                    <li className="sidebar-nav-item">
                      <a href="/archive/">Archive</a>
                    </li>
                    <li className="sidebar-nav-item">
                      <a href="/projects/">Projects</a>
                    </li>
                  </ul>
                </div>
                <p className="copyright">© 2018. All rights reserved.</p>
              </div>
            </div>

            {children}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
