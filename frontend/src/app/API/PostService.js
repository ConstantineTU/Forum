import axios from 'axios'

export default class PostServices {
  static async getById(id) {
    const response = await axios.get('/api/article/' + id).catch((err) => console.error(err, 'Function getById'))
    return response
  }
  static async deleteArticleByPostId(id) {
    const response = await axios
      .delete('/api/article/' + id)
      .catch((err) => console.error(err, 'Function deleteArticleByPostId'))
    return response
  }
  static async getCommentsByPostId(id) {
    const response = await axios
      .get(`/api/comment?article=` + id)
      .catch((err) => console.error(err, 'Function getCommentsByPostId'))
    return response
  }
  static async postArticle(requestBody) {
    await axios.post(`/api/article`, requestBody).catch((err) => console.error(err, 'Function postArticle'))
  }
  static async postComment(requestBody) {
    await axios.post(`/api/comment`, requestBody).catch((err) => console.error(err, 'Function postComment'))
  }
}
