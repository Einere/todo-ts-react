import styled from 'styled-components';

export default styled.header`
  height: 7rem;
  font-size: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media only screen and (min-width: 769px) {
    height: 10rem;
    font-size: 5rem;
  }
`;
