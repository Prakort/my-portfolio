import React from 'react';
import { Grid } from '@material-ui/core';
import { ReactComponent as Not} from '../_images/error.svg';

function NotFound(props) {
  return(
    <Grid container direction="column" justify="center" alignItems="center" style={{paddingTop: 100}}>
      <Grid container justify="center" alignItems="center">
        <span style={{marginBottom: 20, fontWeight: '300'}}>
          Ooops! Page is not found...!
        </span>
      </Grid>
      <Grid container justify="center" alignItems="center" alignContent="center">
        <Not style={{ width: 200, height: 200}}/>
      </Grid>
  
 
    </Grid>
   
  )
}
export default NotFound;
