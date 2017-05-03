import React, { Component } from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom'

import Intro from './pages/Intro';
import Header from './pages/Header';
import Nav from './pages/Nav';
import Copyright from './pages/Copyright';

import Posts from './pages/Posts';
import About from './pages/About';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          date: "April 24, 2017",
          title: "CI/CD inside Docker 2",
          abstract: "Aenean ornare velit lacus varius enim ullamcorper proin aliquam facilisis ante sed etiam magna interdum congue. Lorem ipsum dolor amet nullam sed etiam veroeros.",
          picture: "images/pic01.jpg"
        },
        {
          date: "April 22, 2017",
          title: "CI/CD inside Docker 1",
          abstract: "Aenean ornare velit lacus varius enim ullamcorper proin aliquam facilisis ante sed etiam magna interdum congue. Lorem ipsum dolor amet nullam sed etiam veroeros.",
          picture: "images/pic02.jpg"
        }
      ]
    };
  }

  render() {
    return (
      <BrowserRouter>
        <div id="wrapper" className="fade-in">
          <Intro />
          <Header />
          <Nav />

          <div>
            <Route exact path="/" component={Posts} />
            <Route path="/index.html" component={Posts} />
            <Route path="/about" component={About} />
          </div>

          <Copyright />
        </div >
      </BrowserRouter>
    );
  }
}

export default App;
