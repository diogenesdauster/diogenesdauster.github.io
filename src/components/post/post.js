import React from 'react'
import { Link } from 'gatsby'
const Post = ({ title, url, date, related_posts, children }) => {
  return (
    <>
      <div className="post">
        <h1 className="post-title">
          {url ? <Link to={url}>{title}</Link> : title}
        </h1>
        <span className="post-date">{date}</span>
        {children}
      </div>

      <div className="related">
        <h2>Related Posts</h2>
        <ul className="related-posts">
          {related_posts.map((post, index) => (
            <li id={index}>
              <h3>
                <Link to={post.url}>
                  {post.title} {'  '}
                  <small>{post.date}</small>
                </Link>
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Post
