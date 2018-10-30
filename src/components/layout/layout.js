import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Sidebar, PureSidebar } from '../sidebar/sidebar'
import './layout.css'
import './syntax.css'

export const PureLayout = ({ children, title, data }) => {
  return (
    <>
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: 'Diogenes WebSite' },
          { name: 'keywords', content: 'blog, developer, Diogenes Dauster' },
        ]}
      >
        <html lang="en" />
      </Helmet>

      {data ? <PureSidebar data={data} /> : <Sidebar />}

      <div className="content container">{children}</div>
    </>
  )
}

export const Layout = props => <PureLayout {...props} />

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
