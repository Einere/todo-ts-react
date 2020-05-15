import * as React from 'react';
import {FunctionComponent} from 'react';
import {EmptyTodoItemStyle} from './TodoItem.style';
import {Todo} from "custom-types";

export const EmptyTodoItem: FunctionComponent<Todo.EmptyTodoItemProp> = function () {
    const content = "todo list is empty. add your todo item...";

    return (
        <EmptyTodoItemStyle>
            <p>{content}</p>
        </EmptyTodoItemStyle>
    );
};
