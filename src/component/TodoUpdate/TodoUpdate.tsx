import * as React from 'react';
import {FunctionComponent} from 'react';
import {Todo} from "custom-types";
import {Button, ButtonGroup, Form} from 'react-bootstrap';
import DatePicker from "react-datepicker";
import {TodoInputContainerStyle, TodoInputFieldStyle} from "../TodoInput/TodoInput.style";
import {useValidator} from "../../hooks/useValidator";

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
            <Form onSubmit={onFormSubmit}>
                <Form.Group controlId={`todo-title-${defaultTodoItem.id}`}>
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" className={isTitleValid ? '' : 'invalid'}
                                  onChange={onTitleChange} value={todoTitle}/>
                </Form.Group>
                <Form.Group controlId={`todo-content-${defaultTodoItem.id}`}>
                    <Form.Label>Content</Form.Label>
                    <Form.Control as="textarea" placeholder="Enter content" className={isContentValid ? '' : 'invalid'}
                                  onChange={onContentChange}
                                  value={todoContent}/>
                </Form.Group>
                <DatePicker
                    className="form-control"
                    selected={todoDueTime}
                    onChange={date => setTodoDueTime(date!)}
                    showTimeInput
                    disabledKeyboardNavigation
                    dateFormat="yyyy MM dd hh:mm aa"
                    shouldCloseOnSelect={false}
                />
                <TodoInputFieldStyle>
                    <ButtonGroup>
                        <Button type="submit" disabled={!validity} className={validity ? '' : 'disabled'}
                        >Update</Button>
                        <Button type="button" variant="danger" onClick={cancelUpdateTodoItem}>Cancel</Button>
                    </ButtonGroup>
                </TodoInputFieldStyle>
            </Form>
        </TodoInputContainerStyle>
    );
};
