import React, { useEffect } from 'react'
import { Container , AppBar, Typography, Grow, Grid } from '@material-ui/core'
import memories from './images/memories.jpg'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import { useDispatch } from 'react-redux'

import {getPosts } from './actions/posts'
import useStyles from './styles'

// typography this typo is for assigning the tags 


function App() {
  const classes = useStyles()
  const dispatch = useDispatch()


  useEffect(()=>{
    dispatch(getPosts())
  }, [dispatch])

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading} variant='h3' align='center'> Social Activity</Typography>  
        <img className={classes.image} src={memories} alt='memories' height="100"/>
      </AppBar>

      <Grow in>
        <Container>
          <Grid container justifyContent='space-between' alignItems='stretch' spacing="3">
            
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>

            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>

          </Grid>

        </Container>
      </Grow>

    </Container>
  );
}

export default App;
