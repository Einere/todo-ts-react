import styled from 'styled-components';

export const TodoInputFormStyle = styled.section`
  width: 80%;
  margin: 1rem;
  padding: 0 1rem;
  border-radius: 10px;
  border: 2px solid rgba(0, 0,0, 0.2);
  transition: all 0.5s ease;
  
  @media only screen and (min-width: 769px) {
    width: 50%;
  }
  
  & .form-label {
    font-size: 1.5rem;
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
`;
