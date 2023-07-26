import * as api from '../api'

// Actions- > they are functions that return an action and action is just an object that has a type and a payload

// redux thunk ->>> we use thunk when we work with async data and sometime has to pass. it allows us to specify an aditional arrow function, crazy syntax

export const getPosts = () => async(dispatch) => {

    try {
        const { data } = await api.getPosts()    
        dispatch({ type:"FETCH_ALL" , payload: data })     
    } catch (error) {
        console.log(error)
    }
} 

export const createPost = (newPost) => async(dispatch) => {
    try {
        const {data} = await api.createPost(newPost)
        dispatch({ type: "CREATE", payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const updatePost = ( id, post ) => async(dispatch) => {
    try {
        const {res} = await api.updatePost(id, post)
        dispatch({ type: "UPDATE", payload: res})
    } catch (error) {
        console.log(error)
    }
}

export const deletePost = (id) => async(dispatch) => {
    try {
        await api.deletePost(id)
        dispatch({ type: "DELETE", payload: id })
    } catch (error) {
        console.log(error)
    }
}