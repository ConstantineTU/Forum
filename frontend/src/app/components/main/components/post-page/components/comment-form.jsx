import React, { useState } from 'react'
import MyButton from '../../../../../UI-components/button/my-button'
import MyInput from '../../../../../UI-components/input/my-input'

const CommentForm = (props) => {
  const [comment, setComment] = useState({ article: '', id: '', text: '', user: '' })

  const addNewPost = (e) => {
    e.preventDefault()
    if (comment.user === '' || comment.text === '') return alert('Имя и текст комментария не могут быть пустыми')
    const newPost = {
      ...comment,
      article: props.id,
      id: Date.now(),
    }
    props.create(newPost)
    setComment({ user: '', text: '' })
  }

  return (
    <form className="form">
      <div className="form__inputs">
        <MyInput
          onChange={(e) => setComment({ ...comment, user: e.target.value })}
          value={comment.user}
          type="text"
          placeholder="Имя пользователя"
        />
        <MyInput
          onChange={(e) => setComment({ ...comment, text: e.target.value })}
          value={comment.text}
          type="text"
          placeholder="Текст комментария"
        />
      </div>
      <MyButton onClick={addNewPost}>Создать комментарий</MyButton>
    </form>
  )
}

export default CommentForm
