import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostServices from '../../../../API/PostService'
import { useFetching } from '../../../../hooks/useFetching'
import Loader from '../../../../UI-components/loader/loader'
import './post-page.scss'
import Comment from './components/comment'
import { showDate } from '../../../../utils/showDate'
import MyButton from '../../../../UI-components/button/my-button'
import CommentForm from './components/comment-form'
import { useDispatch, useSelector } from 'react-redux'
import { changeCommentsOn } from '../../../../../redux/actions/actions'

const PostIdPage = () => {
  const dispatch = useDispatch()
  const isCommentsOn = useSelector((state) => state.isCommentsOn.isCommentsOn)

  const params = useParams()
  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostServices.getById(id)
    setPost(response.data)
    if (error) console.log(error)
  })
  const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
    const response = await PostServices.getCommentsByPostId(id)
    setComments(response.data.records)
    if (comError) console.log(comError)
  })

  const createComment = async (newComment) => {
    await PostServices.postComment(newComment)
    setComments([...comments, newComment])
  }

  useEffect(() => {
    fetchPostById(params.id)
    fetchComments(params.id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="post__wrap">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="post__container">
          <div className="post__time">{showDate({ post })}</div>
          <h2 className="postin__title"> {post.title}</h2>
          <div className="postin__text">{post.text}</div>
          <MyButton
            style={{ border: 'none', padding: 0, marginBottom: 20 }}
            onClick={() => dispatch(changeCommentsOn(!isCommentsOn))}
          >
            <h2 className="comments__title">{isCommentsOn ? 'Скрыть комментарии' : 'Показать комментарии'}</h2>
          </MyButton>

          {isCommentsOn ? (
            isComLoading ? (
              <Loader />
            ) : (
              <div>
                <div className="comments__wrap">
                  {comments.map((comm) => {
                    return <Comment key={comm.id} id={comm.id + 1} title={comm.user} text={comm.text} />
                  })}
                </div>
                <hr className="line" />
                <div className="comments-form__wrap">
                  <CommentForm id={params.id} create={createComment} />
                </div>
              </div>
            )
          ) : (
            <div className="comments__hidden">Комментарии скрыты</div>
          )}
        </div>
      )}
    </div>
  )
}

export default PostIdPage
