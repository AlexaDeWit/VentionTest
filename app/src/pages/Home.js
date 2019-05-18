import React from 'react';
import { Header, AppContainer, Link } from '../components/common';

function Home() {
  return (
    <AppContainer>
      <Header>
        <p>
          Hi! Thank you for looking at my interview test.
        </p>

        <Link to="/products">
          View the Cards
        </Link>

        <p>
          Explanations of rationale and approach can be found in the README.md file.
        </p>

        <Link
          to="https://github.com/AlexaDeWit/VentionTest/blob/master/README.md"
          target="_blank"
        >
          View the Readme
        </Link>

      </Header>
    </AppContainer>
  );
}

export default Home;
