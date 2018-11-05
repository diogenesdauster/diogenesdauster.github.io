import React from 'react'
import renderer from 'react-test-renderer'
import IndexPage from './index'

/* eslint-disable */
describe('IndexPage', () =>
  it('renders correctly', () => {
    const tree = renderer
      .create(<IndexPage data={indexData} layoutData={sideData} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  }))
/* eslint-disable */
