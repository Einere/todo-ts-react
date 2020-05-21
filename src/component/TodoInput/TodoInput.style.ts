import styled from 'styled-components';

export const TodoInputContainerStyle = styled.section`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    & form {
      margin: 1rem;
      padding: 0 1rem;
      border-radius: 10px;
      border: 2px solid rgba(0, 0,0, 0.2);
      width: 50%;
      transition: all 0.5s ease;
      
      @media only screen and (max-width: 768px) {
        width: 80%;
      }
      
      & .invalid {
        border: 1px solid red;
      }
    }
`;

export const TodoInputFieldStyle = styled.div`
  margin: 0.5rem;
  
  & button {
    &:disabled {
      cursor: not-allowed;
    }
  }
`;
