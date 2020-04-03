import * as React from 'react';
import {FunctionComponent, useCallback, useMemo, useState} from 'react';
import {Todo} from "../todoTypes";
import TodoItemStyle from './TodoItem.style';

export const TodoItem: FunctionComponent<Todo.TodoItemProp> = function ({todoInfos, todoInfo, setTodoInfos, deleteTodoItem}) {

    const toggleDone = useCallback(() => {
        const newTodoInfos = [...todoInfos];
        const i = newTodoInfos.findIndex((info) => info.id === todoInfo.id);
        newTodoInfos[i].done = !newTodoInfos[i].done;
        setTodoInfos(newTodoInfos);
    }, [todoInfos, todoInfo, setTodoInfos]);

    const [isDetail, setIsDetail] = useState<boolean>(false);
    const toggleIsDetail = useCallback((e) => {
        if (e.target.tagName !== 'BUTTON') setIsDetail(!isDetail);
    }, [isDetail]);

    const expired = useMemo<boolean>(() => {
        return todoInfo.dueTime.getTime() < Date.now();
    }, [todoInfo.dueTime]);

    const onHandleDelete = function () {
        deleteTodoItem(todoInfo.id);
    };

    return (
        <TodoItemStyle expired={expired} done={todoInfo.done} onClick={toggleIsDetail}>
            <h3>{todoInfo.title}</h3>
            <p className={isDetail ? '' : 'invisible'}>{todoInfo.content}</p>
            <p>
                <span className={isDetail ? '' : 'invisible'}>{todoInfo.createTime.toLocaleString()} / </span>
                <span>{todoInfo.dueTime.toLocaleString()}</span>
            </p>
            <button onClick={toggleDone}>done</button>
            <button onClick={onHandleDelete}>delete</button>
        </TodoItemStyle>
    );
};
