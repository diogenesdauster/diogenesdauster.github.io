import React from 'react'
import renderer from 'react-test-renderer'
import PageTemplate from './PageTemplate'

/* eslint-disable */
describe('PageTemplate', () =>
  it('renders correctly', () => {
    const tree = renderer
      .create(<PageTemplate data={pageTemplateData} layoutData={sideData} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  }))
/* eslint-disable */
