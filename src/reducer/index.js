import { combineReducers } from "redux";

import posts from './posts'

export default combineReducers({
    posts : posts
})

// now we will use this postsreducer to access the reducer fucntions in posts.js