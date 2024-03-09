import React from 'react'
import { useNavigate } from 'react-router-dom'
import { showDate } from '../../../../../utils/showDate'
import MyButton from '../../../../../UI-components/button/my-button'

const Post = (props) => {
  const router = useNavigate()

  return (
    <div className="post-wrapper">
      <div className="post">
        <div className="post__content">
          <MyButton
            className={'home__title'}
            style={{ border: 'none', padding: 0 }}
            onClick={() => router(`/posts/${props.post.id}`)}
          >
            <h3 className="post__title">
              <strong>{props.post.title}</strong>
            </h3>
          </MyButton>

          <div className="post__time">{showDate(props)}</div>
        </div>
        <div className="post__btns">
          <MyButton onClick={() => router(`/posts/${props.post.id}`)}>Открыть</MyButton>
          <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
        </div>
      </div>
    </div>
  )
}

export default Post
