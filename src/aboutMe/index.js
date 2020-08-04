import React from 'react';
import {
  Grid,
  makeStyles
} from '@material-ui/core';

const details = [
  {
    texts: "My name is Prakort Lean, and I am a 4th year Mathematics and Computer Science at University of Windsor."
  },
  {
    texts: "I am proud to tell you that I am from Cambodia. Currently, I am living in Windsor to complete my bachelor degree. While living here, I've missed Cambodian food the most."
  },
  {
    texts: "During my free time, I love to meet people. I am a listener and people find me very understanding and I am glad to listen to their stories. I enjoy strolling in the park and I love the smell of earth when it rains."
  },
  {
    texts: "I am always looking forward to learning and growing personally and professionally."
  },
  {
    texts: "How do I make people happy? My honest answer is cook for them 👨‍🍳and take your time to be there for them ⏳."
  }
]
function AboutMe (props){
  const classes = useStyle()
  return(
    <Grid container direction="column" >
      <Grid container>
        <h1 alt="About me component" className={classes.pageTitle}>
          About me
        </h1>
      </Grid>

      {/* My background section */}
      {
        details.map((item, index) => (
          <Grid  key={index} item container className={classes.sectionBox}>
            <span>
              {item.texts}
            </span>
          </Grid>
        ))
      }

    </Grid>
  )
}

export default AboutMe;


const useStyle = makeStyles((theme) => ({
  pageTitle:{
    fontSize: 54,
    fontWeight: '900'
  },
  sectionBox:{
    marginTop: 15,
    marginBottom: 15,
  }
}))
