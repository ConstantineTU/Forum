import React, { Fragment, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAllPosts, changePage } from '../../../../../redux/actions/actions'
import './home.scss'
import PostList from './components/post-list'
import PostForm from './components/post-form'
import PostFilter from './components/post-filter'
import { usePosts } from '../../../../hooks/usePosts'
import PostServices from '../../../../API/PostService'
import Loader from '../../../../UI-components/loader/loader'
import { useFetching } from '../../../../hooks/useFetching'
import Pagination from '../../../../UI-components/pagination/Pagination'
import { fetchGetAll } from '../../../../../redux/asyncAction/reduxPostService'

const Home = () => {
  const dispatch = useDispatch()
  const pageRedux = useSelector((state) => state.page.page)
  const allPostsRedux = useSelector((state) => state.allPosts.allPosts)

  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [totalPages, setTotalPages] = useState(0)
  const limit = 4
  const sortedAndSearchedPosts = usePosts(allPostsRedux, filter.sort, filter.query)
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    await new Promise((res) => {
      res(dispatch(fetchGetAll()))
    }).catch((err) => console.error(err, 'Function fetchPosts'))
  })

  useEffect(() => {
    setTotalPages(Math.ceil(sortedAndSearchedPosts.length / limit))
    if (pageRedux < totalPages) dispatch(changePage(0))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortedAndSearchedPosts.length])

  useEffect(() => {
    if (!sortedAndSearchedPosts.length) {
      fetchPosts()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const createPost = async (newPost) => {
    await PostServices.postArticle(newPost)
    fetchPosts()
  }

  const removePost = async (post) => {
    await PostServices.deleteArticleByPostId(post.id)
    dispatch(addAllPosts(allPostsRedux.filter((p) => p.id !== post.id)))
  }

  const changePageFunc = (page) => {
    dispatch(changePage(page))
  }

  return (
    <Fragment>
      <div className="home">
        <div className="home__container">
          <PostForm create={createPost} />
          <hr className="line" />
          <PostFilter filter={filter} setFilter={setFilter} />
          {postError && <h2 style={{ fontSize: 20, marginTop: 20 }}>Произошла ошибка {postError}</h2>}
          {isPostsLoading ? (
            <Loader />
          ) : (
            <Fragment>
              <PostList
                remove={removePost}
                posts={sortedAndSearchedPosts.slice(pageRedux * limit, limit * (pageRedux + 1))}
                title={'Посты'}
              />
              <Pagination page={pageRedux} changePage={changePageFunc} totalPages={totalPages} />
            </Fragment>
          )}
        </div>
      </div>
    </Fragment>
  )
}

export default Home
