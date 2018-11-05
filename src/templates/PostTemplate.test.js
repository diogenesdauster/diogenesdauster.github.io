import React from 'react'
import renderer from 'react-test-renderer'
import PostTemplate from './PostTemplate'

/* eslint-disable */
describe('PostTemplate', () =>
  it('renders correctly', () => {
    const tree = renderer
      .create(<PostTemplate data={postTemplateData} layoutData={sideData} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  }))
/* eslint-disable */
