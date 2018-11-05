import React from 'react'
import renderer from 'react-test-renderer'
import Post from './post'

/* eslint-disable */
describe('Post', () =>
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Post title={postTemplateData.markdownRemark.frontmatter.title}>
          {postTemplateData.markdownRemark.html}
        </Post>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  }))
/* eslint-disable */
