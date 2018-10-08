import React from 'react'
import { Link } from 'gatsby'

const Sidebar = () => (
  <div className="sidebar">
    <div className="container sidebar-sticky">
      <div className="sidebar-about">
        <h1>
          <a href="/">
            <span role="img" aria-label="emoji">
              👨🏻‍💻{' '}
            </span>
            {`</Diógenes Dauster>`}
          </a>
        </h1>
        <p className="lead">Code Has No Accent</p>
      </div>

      <nav className="sidebar-nav">
        <Link to="/" className="sidebar-nav-item">
          Home
        </Link>
        <Link to="/about" className="sidebar-nav-item">
          About
        </Link>
        <Link to="/archive" className="sidebar-nav-item">
          Archive
        </Link>
        <Link to="/projects" className="sidebar-nav-item">
          Projects
        </Link>
      </nav>
      <p>&copy; 2018. All rights reserved.</p>
    </div>
  </div>
)

export default Sidebar
