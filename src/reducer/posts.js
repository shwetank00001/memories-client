// in reducers states need to be equal to something


export default function reducer( state = [], action ){
    switch(action.type){
        case 'FETCH_ALL':
            return action.payload
        case 'CREATE':
            return [...state, action.payload]

        case "UPDATE":
            return state.map(()=> 
                state._id === action.payload
               ? action.payload : state
            )

        case "DELETE":
            return state.filter((item) => item._id !== action.payload)

        default:
            return state
    }
}

