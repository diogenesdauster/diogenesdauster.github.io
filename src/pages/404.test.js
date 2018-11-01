import React from 'react'
import renderer from 'react-test-renderer'
import NotFoundPage from './404.js'

/* eslint-disable */
describe('404', () =>
  it('renders correctly', () => {
    const tree = renderer.create(<NotFoundPage data={sideData} />).toJSON()
    expect(tree).toMatchSnapshot()
  }))
/* eslint-disable */
