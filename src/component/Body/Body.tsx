import * as React from 'react';
import {FunctionComponent, useCallback, useState} from 'react';
import BodyStyle from './Body.style';
import {TodoInput} from '../TodoInput/TodoInput';
import {TodoList} from "../TodoList/TodoList";
import {Todo} from '../todoTypes';
import {deepCopy} from '../../util/deepCopy';

export const Body: FunctionComponent = function () {
    const [todoInfos, setTodoInfos] = useState<Todo.TodoInfoType[]>([{
        id: 0,
        title: 'foo',
        content: 'bar',
        createTime: new Date(),
        dueTime: new Date(Date.now()),
        done: false
    }]);

    const deleteTodoItem = useCallback((id: number) => {
        const copiedTodoInfos = deepCopy<Todo.TodoInfoType[]>(todoInfos);
        const indexForRemove = copiedTodoInfos.findIndex((todoInfo) => todoInfo.id === id);
        copiedTodoInfos.splice(indexForRemove, 1);
        setTodoInfos(copiedTodoInfos);
    }, [todoInfos, setTodoInfos]);

    return (
        <BodyStyle>
            <TodoInput
                todoInfos={todoInfos}
                setTodoInfos={setTodoInfos}
            />
            <TodoList
                todoInfos={todoInfos}
                setTodoInfos={setTodoInfos}
                deleteTodoItem={deleteTodoItem}
            />
        </BodyStyle>
    );
};
