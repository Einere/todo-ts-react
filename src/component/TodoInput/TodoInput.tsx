import * as React from 'react';
import {FunctionComponent, useCallback, useContext, useRef} from 'react';
import {TodoInfoContext, TodoInfoContextType} from "../TodoInfoContext/TodoInfoContext";

export const TodoInput: FunctionComponent = function () {
    const todoInfoContext: TodoInfoContextType = useContext(TodoInfoContext);

    const todoInputRef = useRef<HTMLInputElement>(null);

    const addTodoItem = useCallback((e) => {
        e.preventDefault();
        if (todoInputRef && todoInputRef.current) {
            console.log(todoInputRef.current.value);
        }
    }, [todoInputRef]);

    return (
        <>
            <label htmlFor={"TodoTitle"}>Todo Title</label>
            <input type={"string"} name={"TodoTitle"} ref={todoInputRef}/>
            <button type={"button"} onClick={addTodoItem}>Add</button>
        </>
    );
};
