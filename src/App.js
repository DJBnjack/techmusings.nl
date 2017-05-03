import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div id="intro">
        <h1>These are <br />
          Techmusings</h1>
        <p>A justo, porta faucibus morbi non nibh arcu accumsan interdum at aenean col Eleifend<br />
          sed accumsan cep cras augue dui Eleifend Aliquam pharetra.</p>
        <ul className="actions">
          <li><a href="#header" className="button icon solo fa-arrow-down scrolly">Continue</a></li>
        </ul>
      </div>
    );
  }
}

export default App;
