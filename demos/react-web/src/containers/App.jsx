import React, { Component } from 'react';
import maru from '../assets/images/maru.jpg';

import '../assets/stylesheets/application.css';

class App extends Component {
  render() {
    return (
      <div>
        <img src={maru} />
        Hello world!
      </div>
    );
  }
}

export default App;
