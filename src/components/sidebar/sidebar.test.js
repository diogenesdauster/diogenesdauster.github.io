import React from 'react'
import renderer from 'react-test-renderer'
import { PureSidebar as Sidebar } from './sidebar'

describe('Sidebar', () =>
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
    const tree = renderer.create(<Sidebar data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  }))
