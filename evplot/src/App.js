import React, { Component } from 'react';
import { Icon } from 'react-materialize'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container center">
        <div className="App-header">
          <h1 className="bold">evPlot</h1>
          <div className="break"></div>
          <h3>Because people need to know what cleaning our air feels</h3>
          <div className="break"></div>
          <div className="break"></div>
          <h5 className="light">Submit your experience at a Tesla Supercharger <br/>
or Destination Charging station below</h5>
        </div>
        <div>
          <p className="light">
            Currently under development<br/>
            Contact the <a href="https://www.messenger.com/t/rlarosa1996" target="_blank">developer</a> if you have any suggestions. This project is open for contribution on <a href="https://github.com/raullarosa/evPlot" target="_blank">Github</a>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
