import React from 'react'
import {Container , AppBar, Typography, Grow, Grid} from '@material-ui/core'
import memories from './images/memories.jpg'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'

// typography this typo is for assigning the tags 


function App() {
  return (
    <Container maxWidth="lg">
      <AppBar position='static' color='inherit'>
        <Typography variant='h3' align='center'> Social Activity</Typography>  
        <img src={memories} alt='memories' height="100"/>
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
