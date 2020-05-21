import * as React from 'react';
import {FunctionComponent} from 'react';
import {Todo} from 'custom-types';
import {TodoInputContainerStyle, TodoInputFieldStyle} from "./TodoInput.style";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Button, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useValidator} from "../../hooks/useValidator";


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
            <Form onSubmit={onFormSubmit}>
                <Form.Group controlId="todo-title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" className={isTitleValid ? '' : 'invalid'}
                                  onChange={onTitleChange} value={todoTitle}/>
                </Form.Group>
                <Form.Group controlId="todo-content">
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
                    <Button type="submit" disabled={!validity}
                            className={validity ? '' : 'disabled'}>Add</Button>
                </TodoInputFieldStyle>
            </Form>
        </TodoInputContainerStyle>
    );
};
