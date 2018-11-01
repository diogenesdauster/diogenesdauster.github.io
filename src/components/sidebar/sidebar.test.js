import React from 'react'
import renderer from 'react-test-renderer'
import { PureSidebar as Sidebar } from './sidebar'

/* eslint-disable */
describe('Sidebar', () =>
  it('renders correctly', () => {
    const tree = renderer.create(<Sidebar data={sideData} />).toJSON()
    expect(tree).toMatchSnapshot()
  }))
/* eslint-disable */
