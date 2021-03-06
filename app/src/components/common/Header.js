import styled from 'styled-components'

export const Header = styled.h1`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const Logo = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 40vmin;
  pointer-events: none;
`;