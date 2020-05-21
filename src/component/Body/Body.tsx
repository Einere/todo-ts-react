import * as React from 'react';
import {FunctionComponent} from 'react';
import BodyStyle from './Body.style';
import {TodoInput} from '../TodoInput/TodoInput';
import {TodoList} from "../TodoList/TodoList";
import {useDB} from "../../hooks/useDB";


export const Body: FunctionComponent = function () {
    const {
        todoInfos,
        addTodoItem,
        toggleDone,
        deleteTodoItem
    } = useDB();

    return (
        <BodyStyle>
            <TodoInput
                todoInfos={todoInfos}
                addTodoItem={addTodoItem}
            />
            <TodoList
                todoInfos={todoInfos}
                toggleDone={toggleDone}
                deleteTodoItem={deleteTodoItem}
            />
        </BodyStyle>
    );
};
