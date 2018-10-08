import React from 'react'
import Layout from '../components/layout/layout'
import Page from '../components/page/page'

const Projects = () => (
  <Layout>
    <Page title={'Projects'}>
      <div className="project-box" id="git-remote-dropbox">
        <h1>
          <a href="https://github.com/anishathalye/git-remote-dropbox">
            git-remote-dropbox
          </a>
        </h1>

        <iframe
          title="github"
          src="https://ghbtns.com/github-btn.html?user=anishathalye&amp;repo=git-remote-dropbox&amp;type=star&amp;count=true"
          frameBorder="0"
          scrolling="0"
          width="170px"
          height="20px"
        />

        <a href="https://github.com/anishathalye/git-remote-dropbox">
          <img
            src="/images/git-remote-dropbox.png"
            alt=""
            style={{ width: '100%', maxWidth: '1520px', maxHeight: '100%' }}
          />
        </a>

        <p>
          git-remote-dropbox is a transparent bidirectional bridge between Git
          and Dropbox. It lets you use a Dropbox folder or a shared folder as a
          true Git remote!
        </p>

        <h2>Blog Posts</h2>
        <ul>
          <li>
            <a href="/2016/04/25/dropbox-as-a-true-git-server/">
              Dropbox as a True Git Server
            </a>
            <span className="inline-post-date">(Apr 2016)</span>
          </li>
          <li>
            <a href="/2015/08/19/git-remote-dropbox/">git-remote-dropbox</a>
            <span className="inline-post-date">(Aug 2015)</span>
          </li>
        </ul>
        <h2>Discussions</h2>
        <ul>
          <li>
            <a href="https://news.ycombinator.com/item?id=11564712">
              <strong>Hacker News</strong>: Dropbox as a Git Server
            </a>
          </li>
        </ul>
      </div>
    </Page>
  </Layout>
)

export default Projects
