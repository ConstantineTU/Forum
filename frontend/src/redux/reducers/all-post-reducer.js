import { ADD_ALL_POSTS } from '../actions/consts'

const initialState = {
  allPosts: [],
}

export function allPostsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ALL_POSTS:
      return { ...state, allPosts: [...action.payload] }
    default:
      return state
  }
}
