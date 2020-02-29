import * as React from 'react';
import {FunctionComponent, useState} from 'react';
import BodyStyle from './Body.style';
import {TodoInput} from '../TodoInput/TodoInput';
import {TodoList} from "../TodoList/TodoList";
import {Todo} from '../todoTypes';

export const Body: FunctionComponent = function () {
    const [todoInfos, setTodoInfos] = useState<Todo.TodoInfoType[]>([]);

    return (
        <BodyStyle>
            <TodoInput
                todoInfos={todoInfos}
                setTodoInfos={setTodoInfos}
            />
            <TodoList
                todoInfos={todoInfos}
            />
        </BodyStyle>
    );
};
