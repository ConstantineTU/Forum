import { createStore, combineReducers, applyMiddleware } from 'redux'
import { allPostsReducer } from '../reducers/all-post-reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { changePageReducer } from '../reducers/page-reducer'
import { changeCommentsOn } from '../reducers/change-comments-on'

const rootReducer = combineReducers({
  allPosts: allPostsReducer,
  page: changePageReducer,
  isCommentsOn: changeCommentsOn,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
