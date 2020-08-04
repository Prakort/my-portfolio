import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import AboutMe from './aboutMe';
import Portfolio from './portfolio';
import Wrapper from './profile';

function App() {
  return(
    <Router>
      <Switch>
      
        <Route exact path="/" component={Portfolio}>
          <Wrapper>
            <Portfolio/>
          </Wrapper>
        </Route>

        <Route exact path="/about" component={AboutMe}>
          <Wrapper>
            <AboutMe/>
          </Wrapper>
        </Route>

      </Switch>
    </Router>
  )
}

export default App;
