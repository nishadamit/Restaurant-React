import React from 'react';
import './App.css';
import { Navbar,Container } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
     <Navbar bg="primary">
       <Container>
            <Navbar.Brand>BuzzTime</Navbar.Brand>
       </Container>
     </Navbar>
    </div>
  );
}

export default App;
