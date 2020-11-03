
import React, { useState } from 'react';
import {
  Grid,
  makeStyles,
  Link
} from '@material-ui/core';

const details = [
  {
    texts: "My name is Prakort Lean, and I am a 4th year Mathematics and Computer Science at University of Windsor."
  },
  {
    texts: "I am originally from Cambodia. Now, I am living in Windsor completing my bachelors degree and looking for an exciting full-time opportunity where I can showcase my skills and experience!"
  },
  {
    texts: "During my free time, I love to meet people. I am a listener and people find me very understanding and I am glad to listen to their stories. I enjoy strolling in the park and I love the smell of earth when it rains."
  },
  {
    texts: "How do I make people happy? My honest answer is cook for them 👨‍🍳and take your time to be there for them ⏳."
  },
  {
    texts: "I am always looking forward to learning and growing personally and professionally."
  },

]
function AboutMe (props){
  const classes = useStyle();
  const [page, setPage] = useState(0);

  return(
    <div style={{ width: '100%', height : '77vh'}}> 
      <object  width = '100%' height = '100%' data={require('./resume.pdf')} />
     </div>
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
