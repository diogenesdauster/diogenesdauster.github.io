import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout/layout'
import Post from '../components/post/post'

const IndexPage = props => {
  const url = '/'
  const title = 'To Do Cake'
  const date = 'Janeiro de 2018'
  const related_posts = [
    {
      url: '/',
      title: 'teste',
      date: 'Janeiro de 2018',
    },
    {
      url: '/',
      title: 'teste',
      date: 'Janeiro de 2018',
    },
  ]
  return (
    <Layout>
      <div className="posts">
        <Post title={title} date={date} related_posts={related_posts}>
          <p>jsdkjaldjlaksjdlkasjdlajsdlkas</p>
        </Post>
      </div>
    </Layout>
  )
}

export default IndexPage
