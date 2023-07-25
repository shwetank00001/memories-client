import React from 'react'
import useStyles from './style'
import { Card,  CardMedia, CardActions, CardContent, Button, Typography } from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'


import moment from 'moment'

const Post = ({ post, setCurrentID }) => {
  const classes = useStyles()

  console.log(post)

  return (
    <Card className='classes.card' >
      <CardMedia className='classes.media'  alt="CardMedia Image Example" title={post.title} />
      <div className='classes.overlay'>
        <Typography variant='h6'>{post.creator}</Typography>
        <Typography variant='body2'>{ moment(post.createdAt).fromNow() }</Typography>
        <img src={post.selectedFile} width="100%"/>
      </div>

      <div className='classes.overlay'>
        <Button 
          style={{color:"black"}} 
          size='small' 
          onClick={ () => {setCurrentID(post._id)} }>
          <MoreHorizIcon fontSize='medium' />
        </Button>
      </div>

      <div className='classes.details'>
      <Typography variant='body2' color='textSecondary'>{post.tags.map( (item) => `#${item} `)}</Typography>
      </div>
        <Typography className='classes.Title' variant='h5' gutterBottom>{post.title}</Typography>
      <CardContent> 
        <Typography variant='h5' gutterBottom>{post.message}</Typography>
      </CardContent>

      <CardActions className='classes.cardActions'>
        <Button size='small' color='primary' onClick={ () => {} }>
          <ThumbUpAltIcon  fontSize='small'/>
           {post.likeCount}
        </Button>
        <Button size='small' color='primary' onClick={ () => {} }>
          <DeleteIcon  fontSize='small'/>
        </Button>

      </CardActions>

    </Card>
  )
}

export default Post