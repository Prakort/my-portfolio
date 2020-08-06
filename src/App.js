import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import firebase from './firebase';

import NotFound from './notFound';
import AboutMe from './aboutMe';
import Portfolio from './portfolio';
import Wrapper from './profile';



function App() {
  firebase.analytics().logEvent('page_is_visited');
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
        <Route path="/404" component={NotFound}>
          <Wrapper>
            <NotFound/>
          </Wrapper>
        </Route>
        <Redirect to="/404" />
      </Switch>
    </Router>
  )
}

export default App;
