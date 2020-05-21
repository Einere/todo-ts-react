import * as React from 'react';
import {FunctionComponent} from 'react';
import {Todo} from "custom-types";
import {TodoItem} from "../TodoItem/TodoItem";
import TodoListStyle from "./TodoList.style";
import {EmptyTodoItem} from "../TodoItem/EmptyTodoItem";

export const TodoList: FunctionComponent<Todo.TodoListProp> = function ({todoInfos, toggleDone, updateTodoItem, deleteTodoItem}) {
    const todoItems = todoInfos.map((info, i) => <TodoItem
        key={i}
        todoInfo={info}
        toggleDone={toggleDone}
        updateTodoItem={updateTodoItem}
        deleteTodoItem={deleteTodoItem}
    />);
    return (
        <TodoListStyle>
            {todoInfos.length > 0 ? todoItems : <EmptyTodoItem todoInfos={todoInfos}/>}
        </TodoListStyle>
    );
};
