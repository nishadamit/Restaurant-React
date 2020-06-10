import React from 'react';
import './App.css';
import { Navbar,Container } from 'react-bootstrap'

import MenuComponent from './components/MenuComponent';

function App() {
  return (
    <div className="App">
     <Navbar bg="primary">
       <Container>
            <Navbar.Brand>BuzzTime</Navbar.Brand>
       </Container>
     </Navbar>
     <MenuComponent />
    </div>
  );
}

export default App;
