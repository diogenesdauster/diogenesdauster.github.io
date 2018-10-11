import React from 'react'
import Layout from '../components/layout/layout'
import Post from '../components/post/post'

const IndexPage = props => {
  const url = '/'
  const title = 'Lorem Ipsum'
  const date = '10 de Outubro de 2018'
  const related_posts = [
    {
      url: '/',
      title: 'What is Lorem Ipsum?',
      date: '10 de Outubro de 2018',
    },
    {
      url: '/',
      title: 'Where does it come from?',
      date: '10 de Outubro de 2018',
    },
  ]
  return (
    <Layout>
      <div className="posts">
        <Post url={url} title={title} date={date} related_posts={related_posts}>
          <p>
            Vestibulum eget cursus elit. Quisque laoreet ac tellus eu tempor.
            Sed eget nulla mollis, tristique urna ut, sollicitudin est. Etiam
            lacinia vehicula porttitor. Curabitur in tincidunt nulla. Duis nec
            fermentum tellus, eget pellentesque libero. Nam malesuada orci ex,
            ac ornare elit pellentesque dignissim. Proin non facilisis leo. Sed
            id sapien nec enim pharetra tincidunt vitae imperdiet tortor. Etiam
            pulvinar aliquet blandit. Cras accumsan diam quam, ut efficitur
            mauris vulputate vel. Vestibulum velit nisl, euismod eu tortor et,
            ultrices auctor enim. Maecenas pharetra, nunc sed dignissim
            pulvinar, diam nisi dignissim sem, sed luctus neque risus at nisi.
            Cras tempor ex ac cursus scelerisque. In hac habitasse platea
            dictumst.
          </p>
        </Post>
      </div>
    </Layout>
  )
}

export default IndexPage
