import * as React from 'react';
import {FunctionComponent} from 'react';
import {Todo} from "../todoTypes";

export const TodoItem: FunctionComponent<Todo.TodoItemProp> = function ({todoInfo}) {

    return (
        <>
            <h3>{todoInfo.title}</h3>
            <p>{todoInfo.content}</p>
            <span>{todoInfo.dueTime.toISOString().split('T')[0]}</span>
        </>
    );
};
