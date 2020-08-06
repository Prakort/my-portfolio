import React from 'react';
import { 
  makeStyles,
  Grid,
  Link

} from '@material-ui/core';

import { Link as LinkRouter } from 'react-router-dom';

import { ReactComponent as Pin } from '../_images/map.svg';
import { ReactComponent as Github } from '../_images/icons8-github-3.svg';
import { ReactComponent as LinkedIn } from '../_images/icons8-linkedin.svg';
import firebase from '../firebase';


function Profile(props) {
  const classes = useStyle();
  const path = window.location.pathname;
  const logEvent = (name) => firebase.analytics().logEvent(name);

  const Cambodia_map_url = `https://www.google.com/maps/place/Cambodia/@12.1363981,102.7361403,7z/data=!3m1!4b1!4m5!3m4!1s0x310787bfd4dc3743:0xe4b7bfe089f41253!8m2!3d12.565679!4d104.990963`;
  return (
    <Grid className={classes.root} container justify="center">
      <Grid container justify="center" alignItems="flex-start" direction="row" className={classes.box}>
        <Grid container item xs={12} sm={12} md={4} direction="column" className={classes.leftSide}>

            <img alt="Prakort Lean" className={classes.imageMe} src={require('../_images/prakort.png')}/>
       
            <h3 alt="Prakort Lean full name" className={classes.fullName}>Prakort Lean <Link alt="Cambodia on the map" href={Cambodia_map_url}>🇰🇭</Link></h3>
            
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
              <LinkRouter className={path === '/'? classes.activeLink : classes.link} to="/" onClick={() => logEvent('clicked_portfolio')}>
                Portfolio
              </LinkRouter>
              <LinkRouter className={path === '/about'? classes.activeLink : classes.link} to="/about" onClick={() => logEvent('clicked_about_me')}>
                About me
              </LinkRouter>
            </Grid>
            <Grid container justify="flex-start" direction="row" className={classes.socialMedia}>
              <Link href="https://github.com/prakort" style={{ marginLeft: -6}} onClick={() => logEvent('clicked_github')}>
                <Github />
              </Link>
              <Link href="https://www.linkedin.com/in/prakort/" style={{ marginLeft: 6}} onClick={() => logEvent('clicked_linkedin')}>
                <LinkedIn/>
              </Link>
              <Link href="mailto:leanprakort@gmail.com" onClick={() => logEvent('clicked_email')}>
                  <img alt="Email icon" src={require('../_images/email.png')} style={{width: 46, height: 45, marginTop: 3, marginLeft: 6}}/>
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
    // padding: 20,
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
      marginTop: 20,
    },
    ['@media (min-width:960px)']: { // eslint-disable-line no-useless-computed-key
      paddingLeft: 40,

    
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
