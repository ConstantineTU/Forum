import { IS_COMMENTS_ON } from '../actions/consts'

const initialState = {
  isCommentsOn: false,
}

export function changeCommentsOn(state = initialState, action) {
  switch (action.type) {
    case IS_COMMENTS_ON:
      return { ...state, isCommentsOn: action.payload }
    default:
      return state
  }
}
