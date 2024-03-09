import { ADD_ALL_POSTS, PAGE, IS_COMMENTS_ON } from './consts'

export function addAllPosts(payload) {
  return { type: ADD_ALL_POSTS, payload }
}
export function changePage(payload) {
  return { type: PAGE, payload }
}
export function changeCommentsOn(payload) {
  return { type: IS_COMMENTS_ON, payload }
}
