import React from 'react'
import renderer from 'react-test-renderer'
import Archive from './archive.js'

describe('Archive', () =>
  it('renders correctly', () => {
    const data = {
      allMarkdownRemark: {
        edges: [
          {
            node: {
              fields: {
                slug: '/2013/12/28/introducing-hyde',
              },
              frontmatter: {
                title: 'Introducing Hyde',
                postdate: 'December 28th, 2013',
                postyear: '2013',
              },
            },
          },
          {
            node: {
              fields: {
                slug: '/2012/02/07/example-content',
              },
              frontmatter: {
                title: 'Example content',
                postdate: 'February 7th, 2012',
                postyear: '2012',
              },
            },
          },
          {
            node: {
              fields: {
                slug: '/2012/02/06/whats-jekyll',
              },
              frontmatter: {
                title: "What's Jekyll?",
                postdate: 'February 6th, 2012',
                postyear: '2012',
              },
            },
          },
        ],
      },
    }

    const tree = renderer
      .create(<Archive data={data} layoutData={sideData} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  }))
