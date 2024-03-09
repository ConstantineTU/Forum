import axios from 'axios'
import { addAllPosts } from '../../redux/actions/actions'

export const fetchGetAll = () => {
  return async (dispatch) => {
    await axios
      .get(`/api/article`)
      .then((response) => dispatch(addAllPosts(response.data.data.reverse())))
      .catch((err) => console.error(err, fetchGetAll))
  }
}
