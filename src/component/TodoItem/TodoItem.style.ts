import styled from 'styled-components';

interface TodoItemStyleProps {
    readonly expired: boolean;
    readonly done: boolean;
}

export default styled.article<TodoItemStyleProps>`
  width: 50%;
  border: 2px solid ${props => props.done ? '#77dd77' : props.expired ? '#ff6961' : '#696969'};
  border-radius: 10px;
  //box-shadow: 0.3rem 0.3rem 1rem ${props => props.done ? '#77dd77' : props.expired ? '#ff6961' : '#696969'};
  margin: 0.5rem 0;
  transition: all 0.5s ease;
  
  @media only screen and (max-width: 768px) {
    width: 80%;
  }
  
  & p.invisible, & span.invisible {
    display: none;
  }
  
  & .icon-container {
    display: inline-flex;
    width: 2rem;
    height: 2rem;
    margin: 0 0.5rem;
    transition: all 0.5s ease;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    
    &:hover {
      background-color: rgba(0, 0, 0, 0.2);
      cursor: pointer;
    }
      
    & .done {
      color: forestgreen;
    }
    
    & .delete {
      color: red;
    }
  }
`;
