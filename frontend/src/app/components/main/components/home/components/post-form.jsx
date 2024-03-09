import React, { useState } from 'react'
import MyButton from '../../../../../UI-components/button/my-button'
import MyInput from '../../../../../UI-components/input/my-input'

const PostForm = (props) => {
  const [post, setPost] = useState({ date: '', title: '', text: '' })

  const addNewPost = (e) => {
    e.preventDefault()
    if (post.title === '' || post.text === '') return alert('Название и текст не могут быть пустыми')
    const newPost = {
      ...post,
      date: new Date(Date.now()).toISOString(),
    }
    props.create(newPost)
    setPost({ title: '', text: '' })
  }

  return (
    <form className="form">
      <div className="form__inputs">
        <MyInput
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          value={post.title}
          type="text"
          placeholder="Название поста"
        />
        <MyInput
          onChange={(e) => setPost({ ...post, text: e.target.value })}
          value={post.text}
          type="text"
          placeholder="Описание поста"
        />
      </div>
      <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>
  )
}

export default PostForm
