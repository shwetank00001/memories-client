import * as api from '../api'

// Actions

// redux thunk ->>> we use thunk when we work with async data and sometime has to pass. it allows us to specify an aditional arrow function, crazy syntax

export const getPosts = () => async(dispatch) => {

    try {
        const { data } = await api.fetchPosts()    
        dispatch({ type:"FETCH_ALL" , paylaod: data })     
    } catch (error) {
        console.log(error)
    }
}