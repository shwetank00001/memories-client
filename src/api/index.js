import axios from 'axios'

const url = 'http://localhost:5000/posts'

export const fetchPosts = () => axios.get(url)

export const createPost = (newPost) => (dispatch) => {
  return axios.post(url, newPost)
    .then((response) => {
      dispatch({ type: 'CREATE', payload: response.data });
    })
    .catch((error) => {
      console.error('Error creating post:', error);
    })

  }

  export const updatePost = ( id, updatedPost ) => axios.patch( `${url}/${id}`, updatedPost)

  export const deletePost = ( id ) => axios.delete(`${url}/${id}`)