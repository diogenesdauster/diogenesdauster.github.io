const sideData = {
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

global.sideData = sideData
global.___loader = {
  enqueue: jest.fn(),
}
