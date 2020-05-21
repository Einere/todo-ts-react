import styled from 'styled-components';

export default styled.header`
  height: 10rem;
  font-size: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media only screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;
