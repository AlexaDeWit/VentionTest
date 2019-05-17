import React from 'react';
import logo from './logo.svg';
import { Header, AppContainer, Logo, Link } from './components/common';

function App() {
  return (
    <AppContainer>
      <Header>
        <Logo src={logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link
          to="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </Link>
      </Header>
    </AppContainer>
  );
}

export default App;
