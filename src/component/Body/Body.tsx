import * as React from 'react';
import {FunctionComponent} from 'react';
import BodyStyle from './Body.style';
import {TodoInput} from '../TodoInput/TodoInput';
import {TodoList} from "../TodoList/TodoList";
import {TodoInfoContext, TodoInfoContextType} from "../TodoInfoContext/TodoInfoContext";


const todoInfoContext: TodoInfoContextType = {
    todoInfoList: []
};

export const Body: FunctionComponent = function () {
    return (
        <BodyStyle>
            <TodoInfoContext.Provider value={todoInfoContext}/>
            <TodoInput/>
            <TodoList/>
        </BodyStyle>
    );
};
