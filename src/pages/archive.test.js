import React from 'react'
import renderer from 'react-test-renderer'
import Archive from './archive'

/* eslint-disable */
describe('Archive', () =>
  it('renders correctly', () => {
    const tree = renderer
      .create(<Archive data={archiveData} layoutData={sideData} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  }))
/* eslint-disable */
