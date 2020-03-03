import styled from 'styled-components';

export default styled.article`
  width: 50%;
  border: 1px solid rgba(0, 0,0, 0.2);
  border-radius: 10px;
  margin: 0.5rem 0;
  
  @media only screen and (max-width: 768px) {
    width: 80%;
  }
`;
