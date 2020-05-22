import styled from 'styled-components';

interface TodoItemStyleProps {
    readonly expired: boolean;
    readonly done: boolean;
}

export const EmptyTodoItemStyle = styled.article`
  width: 80%;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin: 0.5rem 0;
  transition: all 0.5s ease;
  color: rgba(0, 0, 0, 0.5);
  
  @media only screen and (min-width: 769px) {
    width: 50%;
  }
  
  & > p {
    margin: 0.5rem 0;
  }
`;

export const TodoItemStyle = styled.article<TodoItemStyleProps>`
  width: 80%;
  border: 2px solid ${props => props.done ? '#77dd77' : props.expired ? '#ff6961' : '#696969'};
  border-radius: 10px;
  margin: 0.5rem 0;
  padding: 0.5rem 0;
  transition: all 0.5s ease;
  
  @media only screen and (min-width: 769px) {
    width: 50%;
  }
  
  & p {
    margin: 0.5rem 0;
    
    &.invisible {
      display: none;
    }
  }
  
  & span.invisible {
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
      color: mediumseagreen;
    }
    
    & .update {
      color: cornflowerblue;
    }
    
    & .delete {
      color: red;
    }
  }
`;

