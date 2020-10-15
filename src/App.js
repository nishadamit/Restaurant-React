import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store  } from './redux/configureStore';

import MainComponent from './components/MainComponent';

class App extends Component {

  
  render() {
    return (
          <Provider store={store} >
               <Router>
                 <div>
                    <MainComponent />
                  </div>
               </Router>
          </Provider>
    )
  }
}

export default App

