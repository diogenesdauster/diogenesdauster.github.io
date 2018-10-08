import React from 'react'
import Post from '../post/post'

const Posts = ({ posts }) => {
  return (
    <div className="posts">
      {posts.map(post => (
        <Post
          title={post.title}
          date={post.date}
          related_posts={post.related}
          url={post.url}
        >
          {post.content}
        </Post>
      ))}
    </div>
  )
}

export default Posts
