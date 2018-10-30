import React from 'react'
import renderer from 'react-test-renderer'
import { PureLayout as Layout } from './layout'

describe('Layout', () =>
  it('renders correctly', () => {
    const data = {
      allMarkdownRemark: {
        edges: [
          {
            node: {
              frontmatter: {
                name: 'About',
              },
            },
          },
          {
            node: {
              frontmatter: {
                name: 'Archive',
              },
            },
          },
          {
            node: {
              frontmatter: {
                name: 'Projects',
              },
            },
          },
        ],
      },
    }
    const tree = renderer
      .create(
        <Layout title={'About'} data={data}>
          <p>Hello Wolrd</p>
        </Layout>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  }))
