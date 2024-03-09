import { PAGE } from '../actions/consts'

const initialState = {
  page: 0,
}

export function changePageReducer(state = initialState, action) {
  switch (action.type) {
    case PAGE:
      return { ...state, page: action.payload }
    default:
      return state
  }
}
