import React from 'react'
import renderer from 'react-test-renderer'
import Page from './page'

describe('Page', () =>
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Page title={'About'}>
          <p>Hello World</p>
        </Page>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  }))
