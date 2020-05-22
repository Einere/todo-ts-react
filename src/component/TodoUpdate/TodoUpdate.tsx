import * as React from 'react';
import {FunctionComponent} from 'react';
import {Todo} from "custom-types";
import {TodoInputContainerStyle} from "../TodoInput/TodoInput.style";
import {useValidator} from "../../hooks/useValidator";
import {TodoInputForm} from "../TodoInput/TodoInputForm";
import {Button, ButtonGroup} from 'react-bootstrap';

export const TodoUpdate: FunctionComponent<Todo.TodoUpdateProp> = function ({defaultTodoItem, updateTodoItem, cancelUpdateTodoItem}) {
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
        defaultTodoItem,
        onHandleSubmit: updateTodoItem,
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
                <ButtonGroup>
                    <Button type="submit" disabled={!validity} className={validity ? '' : 'disabled'}>Update</Button>
                    <Button type="button" variant="danger" onClick={cancelUpdateTodoItem}>Cancel</Button>
                </ButtonGroup>
            </TodoInputForm>
        </TodoInputContainerStyle>
    );
};
