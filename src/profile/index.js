import React from 'react';
import { 
  makeStyles,
  Grid,
  Link

} from '@material-ui/core';

import { Link as LinkRouter } from 'react-router-dom';

import ImageMe from '../_images/prakort.png';
import { ReactComponent as Pin } from '../_images/map.svg';
import { ReactComponent as Github } from '../_images/icons8-github-3.svg';
import { ReactComponent as LinkedIn } from '../_images/icons8-linkedin.svg';
import Mail from '../_images/email.png';


function Profile(props) {
  const classes = useStyle();
  const path = window.location.pathname;
  return (
    <Grid className={classes.root} container justify="center">
      <Grid container justify="center" alignItems="flex-start" direction="row" className={classes.box}>
        <Grid container item xs={12} sm={12} md={4} direction="column" className={classes.leftSide}>

            <img alt="Prakort Lean" className={classes.imageMe} src={ImageMe}/>
       
            <h3 alt="Prakort Lean full name" className={classes.fullName}>Prakort Lean</h3>
            
            <Grid container alignItems="center">
              <span alt="Prakort Lean full name" className={classes.location}>Windsor, Ontario, Canada </span>
              <Pin className={classes.pin}/>
            </Grid>
            <Grid className={classes.shortDescription}>
              <p>
                A Senior Mathematics and Computer Science at University of Windsor
              </p>
            </Grid>
            {/* <Grid className={classes.shortDescription}>
              <span className={classes.proverb}>
                Never too old to learn,<br/>
                Never too late to start
              </span>
            
            </Grid> */}
            <Grid container justify="flex-start" direction="column" className={classes.linkBox}>
              <LinkRouter className={path === '/'? classes.activeLink : classes.link} to="/">
                Portfolio
              </LinkRouter>
              <LinkRouter className={path === '/about'? classes.activeLink : classes.link} to="/about">
                About me
              </LinkRouter>
            </Grid>
            <Grid container justify="flex-start" direction="row" className={classes.socialMedia}>
              <Link href="https://github.com/prakort" style={{ marginLeft: -6}}>
                <Github />
              </Link>
              <Link href="https://www.linkedin.com/in/prakort/" style={{ marginLeft: 6}}>
                <LinkedIn/>
              </Link>
              <Link href="mailto:leanprakort@gmail.com">
                  <img src={Mail} style={{width: 46, height: 45, marginTop: 3, marginLeft: 6}}/>
              </Link>
            </Grid>

        </Grid>
        <Grid container item xd={12} sm={12} md={8} className={classes.rightSide}>
          {props.children}
        </Grid>

      </Grid>
    </Grid>
  );
}

export default Profile;

const useStyle = makeStyles((theme) => ({
  root: {
    height: '100%',
    width: '100%',
    margin: 'auto',
    paddingRight: 40,
    paddingLeft: 40,
    paddingTop: 20,
    paddingBottom: 50,
    fontFamily: 'Overpass,sans-serif',
    color: '#324332'
  },
  leftSide:{
    padding: 20,
    // backgroundColor: 'yellow',
    ['@media (max-width:960px)']: { // eslint-disable-line no-useless-computed-key
      borderRight: 'none'
    },
    ['@media (min-width:960px)']: { // eslint-disable-line no-useless-computed-key
      borderRight: '1px solid #ddd',
    }
  },
  rightSide:{

    // backgroundColor: 'pink',
    ['@media (max-width:960px)']: { // eslint-disable-line no-useless-computed-key
      paddingLeft: 0,
      marginTop: 30,
    },
    ['@media (min-width:960px)']: { // eslint-disable-line no-useless-computed-key
      paddingLeft: 30,

    
    }
  },

  linkBox:{
    marginTop: 10,
    marginBottom: 20,
  },
  socialMedia:{

  },
  box:{
    width: 1000,
    // backgroundColor: 'blue',
    ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
      width: '100%'
    },
    ['@media (min-width:780px)']: { // eslint-disable-line no-useless-computed-key
      width: 1000,
    }
  },
  imageMe: {
    width: 150,
    height: 150
  },
  link:{
 
    textDecoration: 'none',
    color: '#324332',
    margin: 0,
    marginBottom: 10,
    fontSize: 20,
    '&:hover':{
      color: '#3bba6c !important',
      textDecoration: 'underline'
    
    }
  },
  activeLink:{
    color: '#3bba6c !important',
    textDecoration: 'underline',
    marginBottom: 10,
    fontWeight: '800',
    fontSize: 20,
  },
  proverb:{
    fontSize: 15,
    fontWeight: '300'
  },
  fullName: {
    marginTop: 30,
    marginBottom: 0,
    padding: 0,
    fontFamily: 'Overpass,sans-serif',
    fontSize: 28,
    fontWeight: '800 !important'
  },
  location: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
    color: 'gray',
    fontFamily: 'Lato,sans-serif',
    fontWeight: '300'
  },
  pin: {
    width: 20, 
    height: 15,
    marginLeft: 5,  
    marginBottom: -6
  },
  shortDescription:{
    marginBottom: 0,
    paddingRight: 10,
    // maxWidth: 300,
    // minWidth: 300,
    ['@media (max-width:960px)']: { // eslint-disable-line no-useless-computed-key
      width: 300,
    },
  }
}))
