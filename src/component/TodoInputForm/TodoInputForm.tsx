import * as React from 'react';
import {FunctionComponent} from 'react';
import {Form} from "react-bootstrap";
import DatePicker from "react-datepicker";
import {Todo} from "custom-types";
import {TodoInputFormStyle} from "./TodoInputForm.style";

export const TodoInputForm: FunctionComponent<Todo.TodoInputFormProp> = function (props) {
    const {
        children,
        todoTitle,
        todoContent,
        todoDueTime,
        setTodoDueTime,
        isTitleValid,
        isContentValid,
        onFormSubmit,
        onTitleChange,
        onContentChange,
    } = props;

    return (
        <TodoInputFormStyle>
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
                <Form.Group>
                    <DatePicker
                        className="form-control data-picker-input"
                        selected={todoDueTime}
                        onChange={date => setTodoDueTime(date!)}
                        showTimeInput
                        disabledKeyboardNavigation
                        dateFormat="yyyy MM dd hh:mm aa"
                        shouldCloseOnSelect={false}
                    />
                </Form.Group>
                <Form.Group>
                    {children}
                </Form.Group>
            </Form>
        </TodoInputFormStyle>

    );
};
