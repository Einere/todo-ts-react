import styled from 'styled-components';

export const TodoInputContainerStyle = styled.section`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    & form {
      margin: 1rem;
      border-radius: 10px;
      border: 2px solid rgba(0, 0,0, 0.2);
      width: 50%;
      transition: all 1s ease;
      
      @media only screen and (max-width: 768px) {
        width: 80%;
      }
      
      & input{
        width: available;
      }
    }
`;

export const TodoInputFieldStyle = styled.div`
  margin: 0.5rem;
  
  
  & label {
      display: inline-flex;
      box-sizing: border-box;
      flex-direction: row-reverse;
      width: 50%;
      padding-right: 1vh;
  }
  
  & input {
      box-sizing: border-box;
      width: 50%;
      
      &.invalid {
        border: 1px solid red;
      }
  }
  
  & .rdt {
    display: flex;
    justify-content: center;
  }
`;
