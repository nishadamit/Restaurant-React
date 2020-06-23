import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import MainComponent from './components/MainComponent';

class App extends Component {

  
  render() {
    return (
      <Router>
         <div>
            <MainComponent />
          </div>
      </Router>

    )
  }
}

export default App

