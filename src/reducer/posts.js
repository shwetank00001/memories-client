// in reducers states need to be equal to something


export default function reducer( posts = [], action ){
    switch(action.type){
        case 'FETCH_ALL':
            return action.payload
        case 'CREATE':
            return posts

        default:
            return posts
    }
}