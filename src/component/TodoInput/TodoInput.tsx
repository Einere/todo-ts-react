import * as React from 'react';
import {FunctionComponent} from 'react';
import {Todo} from 'custom-types';
import {TodoInputContainerStyle} from "./TodoInput.style";
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useValidator} from "../../hooks/useValidator";
import {TodoInputForm} from "./TodoInputForm";
import {Button} from "react-bootstrap";


export const TodoInput: FunctionComponent<Todo.TodoInputProp> = function ({addTodoItem}) {
    const {
        validity,
        todoTitle,
        todoContent,
        todoDueTime,
        setTodoDueTime,
        isTitleValid,
        isContentValid,
        onFormSubmit,
        onTitleChange,
        onContentChange,
    } = useValidator({
        onHandleSubmit: addTodoItem
    });

    return (
        <TodoInputContainerStyle>
            <TodoInputForm
                todoTitle={todoTitle}
                todoContent={todoContent}
                todoDueTime={todoDueTime}
                setTodoDueTime={setTodoDueTime}
                isTitleValid={isTitleValid}
                isContentValid={isContentValid}
                onFormSubmit={onFormSubmit}
                onTitleChange={onTitleChange}
                onContentChange={onContentChange}
            >
                <Button type="submit" disabled={!validity} className={validity ? '' : 'disabled'}>Add</Button>
            </TodoInputForm>
        </TodoInputContainerStyle>
    );
};
