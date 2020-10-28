import React from 'react';
import {
  Grid,
  makeStyles,
  Link
} from '@material-ui/core';
import firebase from '../firebase';

const Projects =[
  {
    name: 'Eatco Hub',
    details: 'Restaurant orders management service',
    link: 'https://www.eatcohub.com/',
    icon: require("../_images/eatco_2.png"),
    iconStyle: {
      width: 70,
      height: 70,
    }
  },
  {
    name: 'Eatco',
    details: 'Food delivery app for the locals in Windsor',
    link: 'https://apps.apple.com/us/app/eatco/id1526510373',
    icon: require("../_images/eatco_2.png"),
    iconStyle: {
      width: 70,
      height: 70,
    }
  },
  {
    name: 'WD Border Traffic',
    details: 'WD Border Traffic',
    link: 'https://play.google.com/store/apps/details?id=com.hsdeogan.WDBorderTraffic&hl=en_CA',
    icon: require("../_images/WD.png"),
    iconStyle: {
      width: 70,
      height: 70,
    }
  },
  {
    name: 'Star Hotel',
    details: 'Hote booking management',
    link: 'http://leanp.myweb.cs.uwindsor.ca/60334/final_project/html/index.html',
    icon: require("../_images/star.png"),
    iconStyle: {
      width: 70,
      height: 70,
    }
  },
  {
    name: 'UWindsor CSS Hub',
    details: 'Computer Science Society\'s webpage',
    link: 'https://css.uwindsor.ca/',
    icon: require("../_images/css.png"),
    iconStyle: {
      width: 70,
      height: 70,
    }
  }
];

const Exp= [
  {
    name: 'Fetch Moto Inc.',
    role: 'Software Engineering Intern',
    icon: require('../_images/fetch.png'),
    iconStyle: {
      width: 70,
      height: 70,
    }

  },
  {
    name: 'University of Windsor',
    role: 'Undergrade Research Assistant',
    icon: require('../_images/uwindsor.png'),
    iconStyle: {
      width: 70,
      height: 70,
    }

  }
]
function Porfolio (props){
  const classes = useStyle();
  const logEvent = (name) => firebase.analytics().logEvent(name);

  return(
    <Grid container direction="column" >
      <Grid container>
        <h1 alt="Portfolio component" className={classes.pageTitle}>
          Portfolio
        </h1>
      </Grid>

      {/* Project section */}
      <Grid item container className={classes.sectionBox}>
        <h3 alt="Projects section" className={classes.sectionTitle}>
          Projects
        </h3>
      </Grid>

      <Grid container direction="row" spacing={4}>
      { 
          Projects.map((item, index) => (
            <Grid  key={index} item md={12} lg={6} container direction="row" justify="center" alignItems="center" className={classes.data}>
              <Grid item xs={4} >
                <Link href={item.link} onClick={() => logEvent(item.link)}>
                <img alt={item.name} src={item.icon} style={item.iconStyle} />
                </Link>
              </Grid>
              <Grid  xs={8} item container direction="column">
                <span alt={item.name} className={classes.name}>
                  {item.name}
                </span>
                <span alt={item.details}>
                  {item.details}
                </span>
              </Grid>
            </Grid>
            ))
            }
          <Grid>
        </Grid>        
      </Grid>

    <br></br>
    {/* Experience section */}
      <Grid item container className={classes.sectionBox}>
        <h3 alt="Projects section" className={classes.sectionTitle}>
          Experience
        </h3>
      </Grid>

      <Grid container direction="row" spacing={4}>
        { 
          Exp.map((item, index) => (
            <Grid  key={index} item md={12} lg={6} container direction="row" justify="center" alignItems="center" className={classes.data}>
              <Grid item xs={4} >
                {/* <Link href={item.link}> */}
                <img alt={item.name} src={item.icon} style={item.iconStyle} />
                {/* </Link> */}
              </Grid>
              <Grid  xs={8} item container direction="column">
                <span alt={item.name} className={classes.name}>
                  {item.name}
                </span>
                <span alt={item.role}>
                  {item.role}
                </span>
              </Grid>
            </Grid>
          ))
          }
        <Grid>
      </Grid>     


    </Grid>
  </Grid>
  )
}

export default Porfolio;

const useStyle = makeStyles((theme) => ({
  pageTitle:{
    fontSize: 54,
    fontWeight: '900'
  },
  sectionBox:{
    marginTop: 15,
    marginBottom: 10,
  },
  sectionTitle:{
    fontSize: 24,
    fontWeight: '900',
    margin: 0,
  },
  data:{
    marginTop: 20,
    maxWidth: 300,
    // ['@media (max-width:750px)']: { // eslint-disable-line no-useless-computed-key
    //   minWidth: 350,
    // },  
  },
  name:{
    fontSize: 18,
    fontWeight: 'bold'
  }
}))
