import React from 'react'

const Comment = (props) => {
  return (
    <div className="comments__comment">
      <h3 className="comments__comment-title">{props.title}</h3>
      <div className="comments__comment-text">{props.text}</div>
    </div>
  )
}

export default Comment
