import React from 'react'
import Layout from '../components/layout/layout'
import Page from '../components/page/page'

const Projects = () => (
  <Layout>
    <Page title={'Projects'}>
      <div className="project-box">
        <h1>
          <a href="/">Where does it come from?</a>
        </h1>

        <iframe
          title="github"
          src="https://ghbtns.com/github-btn.html?user=anishathalye&amp;repo=git-remote-dropbox&amp;type=star&amp;count=true"
          frameBorder="0"
          scrolling="0"
          width="170px"
          height="20px"
        />

        <a href="/">
          <img
            src="/images/git-remote-dropbox.png"
            alt=""
            style={{ width: '100%', maxWidth: '1520px', maxHeight: '100%' }}
          />
        </a>

        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>

        <h2>Blog Posts</h2>
        <ul>
          <li>
            <a href="/">What is Lorem Ipsum?</a>
            <span className="inline-post-date">(Apr 2016)</span>
          </li>
          <li>
            <a href="/">Where can I get some?</a>
            <span className="inline-post-date">(Aug 2015)</span>
          </li>
        </ul>
        <h2>Discussions</h2>
        <ul>
          <li>
            <a href="/">
              <strong>Lorem Ipsum</strong>: Why do we use it?
            </a>
          </li>
        </ul>
      </div>
    </Page>
  </Layout>
)

export default Projects
