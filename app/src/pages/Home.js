import React from 'react';
import logo from '../assets/logo.svg';
import { Header, AppContainer, Logo, Link } from '../components/common';

function Home() {
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

export default Home;
