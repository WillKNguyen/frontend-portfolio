import React from 'react';
import Sidebar from './components/Sidebar';
import './styles/style.css'
import Container from './components/Container';

function App() {
  return (
    <React.Fragment>
      <Sidebar></Sidebar>
      <Container></Container>
    </React.Fragment>
  );
}

export default App;
