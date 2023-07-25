import React from 'react'
import useStyles from './styles'
import Post from './Post/Post'


import { Grid , CircularProgress } from '@material-ui/core'
import { useSelector } from 'react-redux'


// useSelector and useDispatch are a set of hooks to use as alternatives to the existing connect() higher-order component. The equivalent of map state to props is useSelector. It takes in a function argument that returns the part of the state that you want. The equivalent of map dispatch to props is useDispatch. We can invoke useDispatch and store it to a variable, dispatch. Dispatch will work with the allActions imported from the actions folder.
const Posts = ({ setCurrentID }) => {
  const classes = useStyles()
  const posts = useSelector(( state ) => state.posts)

  return (
    !posts.length ? 
      <CircularProgress /> : (
      <Grid className='classes.container' container alignItems='stretch' spacing={3}>
        {posts.map(function(item){
          return(
            <Grid key={item._id} item xs={12} sm={16}>
              <Post post= {item} setCurrentID= { setCurrentID }/>
            </Grid>
          )
        })}
      </Grid>)
  )
}
  
export default Posts