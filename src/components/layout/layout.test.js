import React from 'react'
import renderer from 'react-test-renderer'
import { PureLayout as Layout } from './layout'

/* eslint-disable */
describe('Layout', () =>
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Layout title={'About'} data={sideData}>
          <p>Hello Wolrd</p>
        </Layout>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  }))
/* eslint-disable */
