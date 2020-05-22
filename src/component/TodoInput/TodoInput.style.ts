import styled from 'styled-components';

export const TodoInputContainerStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  
  & form {
    width: 80%;
    margin: 1rem;
    padding: 0 1rem;
    border-radius: 10px;
    border: 2px solid rgba(0, 0,0, 0.2);
    transition: all 0.5s ease;
    
    @media only screen and (min-width: 769px) {
      width: 50%;
    }
    
    & .invalid {
      border: 1px solid red;
    }
    
    & :disabled {
      cursor: not-allowed;
    }
    
    & .react-datepicker-wrapper {
    width: 100%;
    
    @media only screen and (min-width: 769px) {
      width: unset;
    }  
  }
  }
`;
