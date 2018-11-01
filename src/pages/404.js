import React from 'react'
import Layout from '../components/layout/layout'

const NotFoundPage = ({ data }) => {
  return (
    <Layout data={data}>
      <div style={{ textAlign: 'center' }}>
        <img src="/images/one-punch-man.png" alt="404" />
        <h1>404 Page not Found</h1>
      </div>
    </Layout>
  )
}

export default NotFoundPage
