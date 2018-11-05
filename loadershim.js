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

const archiveData = {
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

const indexData = {
  allMarkdownRemark: {
    edges: [
      {
        node: {
          excerpt:
            "Hyde is a brazen two-column  Jekyll  theme that pairs a prominent sidebar with uncomplicated content. It's based on  Poole , the Jekyll…",
          fields: {
            slug: '/2013/12/28/introducing-hyde',
          },
          frontmatter: {
            title: 'Introducing Hyde',
            postdate: 'December 28th, 2013',
          },
        },
      },
      {
        node: {
          excerpt:
            'Jekyll  is a static site generator, an open-source tool for creating simple yet powerful websites of all shapes and sizes. From  the project…',
          fields: {
            slug: '/2012/02/06/whats-jekyll',
          },
          frontmatter: {
            title: "What's Jekyll?",
            postdate: 'February 6th, 2012',
          },
        },
      },
      {
        node: {
          excerpt:
            'Cum sociis natoque penatibus et magnis  dis parturient montes , nascetur ridiculus mus.  Aenean eu leo quam.  Pellentesque ornare sem…',
          fields: {
            slug: '/2012/02/07/example-content',
          },
          frontmatter: {
            title: 'Example content',
            postdate: 'February 7th, 2012',
          },
        },
      },
    ],
  },
}

const pageTemplateData = {
  allMarkdownRemark: {
    edges: [
      {
        node: {
          html:
            '<p>Software Developer very fascinated about software architecture. I\'m a person who likes hardworking for solving issues and always is learn something new. I have knowledge about FullStack Development, Mobile Development and Totvs ERP. Recently a took a Mobile Post-Graduation and a nanodegree in the Udacity to deep my knowledge. I started my developer career when I was a teenager and since then I\'ve been learning how can I be a better developer. Making simple code for the others, taking care about what I write to avoid issue and doing test as many as possible.</p>\n<h1>Contact</h1>\n<ul>\n<li><a href="mailto:diogenes.dauster@gmail.com">diogenes.dauster@gmail.com</a></li>\n<li><a href="https://github.com/diogenesdauster">github.com/diogenesdauster</a></li>\n<li><a href="https://www.linkedin.com/in/diogenesdauster/">linkedin.com/in/diogenesdauster</a></li>\n</ul>',
          frontmatter: {
            sidebar: 'About',
          },
        },
      },
    ],
  },
}

const postTemplateData = {
  markdownRemark: {
    html:
      '<div class="message">\n  Howdy! This is an example blog post that shows several types of HTML content supported in this theme.\n</div>\n<p>Cum sociis natoque penatibus et magnis <a href="#">dis parturient montes</a>, nascetur ridiculus mus. <em>Aenean eu leo quam.</em> Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>\n<blockquote>\n<p>Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n</blockquote>\n<p>Etiam porta <strong>sem malesuada magna</strong> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>\n<h2>Inline HTML elements</h2>\n<p>HTML defines a long list of available inline tags, a complete list of which can be found on the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element">Mozilla Developer Network</a>.</p>\n<ul>\n<li><strong>To bold text</strong>, use <code>&#x3C;strong></code>.</li>\n<li><em>To italicize text</em>, use <code>&#x3C;em></code>.</li>\n<li>Abbreviations, like <abbr title="HyperText Markup Langage">HTML</abbr> should use <code>&#x3C;abbr></code>, with an optional <code>title</code> attribute for the full phrase.</li>\n<li>Citations, like <cite>— Mark otto</cite>, should use <code>&#x3C;cite></code>.</li>\n<li><del>Deleted</del> text should use <code>&#x3C;del></code> and <ins>inserted</ins> text should use <code>&#x3C;ins></code>.</li>\n<li>Superscript <sup>text</sup> uses <code>&#x3C;sup></code> and subscript <sub>text</sub> uses <code>&#x3C;sub></code>.</li>\n</ul>\n<p>Most of these elements are styled by browsers with few modifications on our part.</p>\n<h2>Heading</h2>\n<p>Vivamus sagittis lacus vel augue rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>\n<h3>Code</h3>\n<p>Cum sociis natoque penatibus et magnis dis <code>code element</code> montes, nascetur ridiculus mus.</p>\n<p>{% highlight js %}\n// Example can be run directly in your JavaScript console</p>\n<p>// Create a function that takes two arguments and returns the sum of those arguments\nvar adder = new Function("a", "b", "return a + b");</p>\n<p>// Call the function\nadder(2, 6);\n// > 8\n{% endhighlight %}</p>\n<p>Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.</p>\n<h3>Gists via GitHub Pages</h3>\n<p>Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo. Donec sed odio dui.</p>\n<p>{% gist 5555251 gist.md %}</p>\n<p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper.</p>\n<h3>Lists</h3>\n<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>\n<ul>\n<li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>\n<li>Donec id elit non mi porta gravida at eget metus.</li>\n<li>Nulla vitae elit libero, a pharetra augue.</li>\n</ul>\n<p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>\n<ol>\n<li>Vestibulum id ligula porta felis euismod semper.</li>\n<li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>\n<li>Maecenas sed diam eget risus varius blandit sit amet non magna.</li>\n</ol>\n<p>Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.</p>\n<dl>\n  <dt>HyperText Markup Language (HTML)</dt>\n  <dd>The language used to describe and define the content of a Web page</dd>\n  <dt>Cascading Style Sheets (CSS)</dt>\n  <dd>Used to describe the appearance of Web content</dd>\n  <dt>JavaScript (JS)</dt>\n  <dd>The programming language used to build advanced Web sites and applications</dd>\n</dl>\n<p>Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus eget urna mollis ornare vel eu leo.</p>\n<h3>Images</h3>\n<p>Quisque consequat sapien eget quam rhoncus, sit amet laoreet diam tempus. Aliquam aliquam metus erat, a pulvinar turpis suscipit at.</p>\n<p><img src="https://placehold.it/800x400" alt="placeholder" title="Large example image">\n<img src="https://placehold.it/400x200" alt="placeholder" title="Medium example image">\n<img src="https://placehold.it/200x200" alt="placeholder" title="Small example image"></p>\n<h3>Tables</h3>\n<p>Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n<table>\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Upvotes</th>\n      <th>Downvotes</th>\n    </tr>\n  </thead>\n  <tfoot>\n    <tr>\n      <td>Totals</td>\n      <td>21</td>\n      <td>23</td>\n    </tr>\n  </tfoot>\n  <tbody>\n    <tr>\n      <td>Alice</td>\n      <td>10</td>\n      <td>11</td>\n    </tr>\n    <tr>\n      <td>Bob</td>\n      <td>4</td>\n      <td>3</td>\n    </tr>\n    <tr>\n      <td>Charlie</td>\n      <td>7</td>\n      <td>9</td>\n    </tr>\n  </tbody>\n</table>\n<p>Nullam id dolor id nibh ultricies vehicula ut id elit. Sed posuere consectetur est at lobortis. Nullam quis risus eget urna mollis ornare vel eu leo.</p>\n<hr>\n<p>Want to see something else added? <a href="https://github.com/poole/poole/issues/new">Open an issue.</a></p>',
    frontmatter: {
      title: 'Example content',
    },
  },
}

global.sideData = sideData
global.indexData = indexData
global.archiveData = archiveData
global.pageTemplateData = pageTemplateData
global.postTemplateData = postTemplateData
global.___loader = {
  enqueue: jest.fn(),
}
