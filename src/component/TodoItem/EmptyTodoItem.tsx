import * as React from 'react';
import {FunctionComponent} from 'react';
import {Todo} from "../todoTypes";
import {EmptyTodoItemStyle} from './TodoItem.style';

export const EmptyTodoItem: FunctionComponent<Todo.EmptyTodoItemProp> = function () {
    const content = "todo list is empty. add your todo item...";

    return (
        <EmptyTodoItemStyle>
            <p>{content}</p>
        </EmptyTodoItemStyle>
    );
};
