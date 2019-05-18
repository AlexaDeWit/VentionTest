import styled from 'styled-components'

export const Row = styled.div`
  position: relative;
  display: block;
  box-sizing: border-box;
  height: auto;
`;

export const ColumnLarge = styled.div`
  position: relative;

  @media (min-width: 640px){
    display: block;
    float: left;
  }
  @media (min-width: 768px){
    width: 50%
  }
  @media (min-width: 1024px){
    width: 33%;
  }
`;