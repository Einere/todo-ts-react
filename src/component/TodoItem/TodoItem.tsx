import * as React from 'react';
import {FunctionComponent, useCallback} from 'react';
import {Todo} from "../todoTypes";

export const TodoItem: FunctionComponent<Todo.TodoItemProp> = function ({todoInfos, todoInfo, setTodoInfos}) {

    const toggleDone = useCallback(() => {
        const newTodoInfos = [...todoInfos];
        const i = newTodoInfos.findIndex((info) => info.id === todoInfo.id);
        newTodoInfos[i].done = !newTodoInfos[i].done;
        setTodoInfos(newTodoInfos);
    }, [todoInfos, todoInfo, setTodoInfos]);

    return (
        <>
            <h3>{todoInfo.title}</h3>
            <p>{todoInfo.content}</p>
            <p>{todoInfo.done ? 'O' : 'X'} / {todoInfo.dueTime.toLocaleString()}</p>
            <button onClick={toggleDone}>done</button>
            <button>delete</button>
        </>
    );
};
