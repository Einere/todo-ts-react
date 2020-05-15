import * as React from 'react';
import {FunctionComponent} from 'react';
import {TodoItem} from "../TodoItem/TodoItem";
import TodoListStyle from "./TodoList.style";
import {EmptyTodoItem} from "../TodoItem/EmptyTodoItem";
import {Todo} from "custom-types";

export const TodoList: FunctionComponent<Todo.TodoListProp> = function ({todoInfos, deleteTodoItem, toggleDone}) {
    const todoItems = todoInfos.map((info, i) => <TodoItem
        key={i}
        todoInfos={todoInfos}
        todoInfo={info}
        toggleDone={toggleDone}
        deleteTodoItem={deleteTodoItem}
    />);
    return (
        <TodoListStyle>
            {todoInfos.length > 0 ? todoItems : <EmptyTodoItem todoInfos={todoInfos}/>}
        </TodoListStyle>
    );
};
