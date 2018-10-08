import React from 'react'
import Layout from '../components/layout/layout'
import Page from '../components/page/page'
import { Link } from 'gatsby'

const Archive = () => (
  <Layout>
    <Page title={'Archives'}>
      <h1 id="2018">2018</h1>
      <ul>
        <li>
          <p>
            19 Jul 2018 —{' '}
            <Link to="/">Gemini: A Modern LaTeX Poster Theme</Link>
          </p>
        </li>
        <li>
          <p>
            03 Apr 2018 —{' '}
            <Link to="/">
              Turning a MacBook into a Touchscreen with $1 of Hardware
            </Link>
          </p>
        </li>
      </ul>
    </Page>
  </Layout>
)

export default Archive
