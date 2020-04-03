import styled from 'styled-components';

interface TodoItemStyleProps {
    readonly expired: boolean;
    readonly done: boolean;
}

export default styled.article<TodoItemStyleProps>`
  width: 50%;
  border: 2px solid ${props => props.done ? '#77dd77' : props.expired ? '#ff6961' : '#696969'} ;
  border-radius: 10px;
  margin: 0.5rem 0;
  transition: all 1s ease;
  
  @media only screen and (max-width: 768px) {
    width: 80%;
  }
  
  & p.invisible, & span.invisible {
    display: none;
  }
`;
