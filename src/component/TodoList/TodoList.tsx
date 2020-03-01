import * as React from 'react';
import {FunctionComponent} from 'react';
import {Todo} from "../todoTypes";
import {TodoItem} from "../TodoItem/TodoItem";
import TodoListStyle from "./TodoList.style";

export const TodoList: FunctionComponent<Todo.TodoListProp> = function ({todoInfos, setTodoInfos}) {
    const todoItems = todoInfos.map((info, i) => <TodoItem
        key={i}
        todoInfos={todoInfos}
        todoInfo={info}
        setTodoInfos={setTodoInfos}
    />);
    return (
        <TodoListStyle>
            {todoItems}
        </TodoListStyle>
    );
};
