import React from 'react'
import useStyles from './styles'

import { TextField , Button , Typography, Paper } from '@material-ui/core'
import FileBase from 'react-file-base64'

import { useDispatch, useSelector } from 'react-redux'
import { createPost, updatePost } from '../../actions/posts'


const Form = ({ currentID, setCurrentID }) => {


  const [ postData, setPostData ] = React.useState({
    creator : "",
    title : "",
    message: "",
    tags: "",
    selectedFile : ""
  })
  const post = useSelector(( state ) => currentID ? state.posts.find(( item ) => item._id === currentID): null)
  const classes = useStyles()
  const dispatch = useDispatch()

  React.useEffect( () => {
    if(post) setPostData(post)
    
  },[post])

  function handleSubmit(e){
    e.preventDefault()
    if(currentID){
      dispatch(updatePost(currentID, postData))
    }else{
      dispatch(createPost(postData))
    }

    clear()
  }

  function clear(){
    setCurrentID = null
    setPostData({
      creator : "",
      title : "",
      message: "",
      tags: "",
      selectedFile : ""
    })
  }
  
  return (
    <Paper className='classes.paper'>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentID ? `Editing "${post.title}"` : 'Creating a Memory'}</Typography>
        <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
        <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>

    </Paper>
  )
}

export default Form