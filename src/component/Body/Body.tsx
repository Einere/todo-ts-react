import * as React from 'react';
import {FunctionComponent, useState} from 'react';
import BodyStyle from './Body.style';
import {TodoInput} from '../TodoInput/TodoInput';
import {TodoList} from "../TodoList/TodoList";
import {Todo} from '../todoTypes';

export const Body: FunctionComponent = function () {
    const [todoInfos, setTodoInfos] = useState<Todo.TodoInfoType[]>([{
        id: 0,
        title: 'foo',
        content: 'bar',
        createTime: new Date(),
        dueTime: new Date(Date.now()),
        done: false
    }]);

    return (
        <BodyStyle>
            <TodoInput
                todoInfos={todoInfos}
                setTodoInfos={setTodoInfos}
            />
            <TodoList
                todoInfos={todoInfos}
                setTodoInfos={setTodoInfos}
            />
        </BodyStyle>
    );
};
