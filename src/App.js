import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import Intro from './pages/Intro';
import Header from './pages/Header';
import Nav from './pages/Nav';
import Copyright from './pages/Copyright';

import Posts from './pages/Posts';
import About from './pages/About';
import Article from './pages/Article';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div id="wrapper" className="fade-in">
          <Route exact path="/" render={() => (
            <Intro />
          )} />

          <Header />
          <Nav />

          <div>
            <Switch>
              <Route exact path="/index.html" render={() => (<Redirect to="/" />)} />
              <Route exact path="/" component={Posts} />
              <Route exact path="/about" component={About} />
              <Route path="/article/:articleId" component={Article} />
            </Switch>
          </div>

          <Copyright />
        </div >
      </BrowserRouter>
    );
  }
}

export default App;
