import React from 'react'
import Post from './post'

const PostList = (props) => {
  if (!props.posts.length) {
    return <div className="post__notfound">Посты не найдены</div>
  }
  return (
    <div className="post-list">
      <h2 className="home__title">{props.title}</h2>
      {props.posts.map((post, i) => {
        return <Post remove={props.remove} number={i + 1} post={post} key={post.id} />
      })}
    </div>
  )
}

export default PostList
