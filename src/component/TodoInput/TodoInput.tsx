import * as React from 'react';
import {FormEvent, FunctionComponent, useCallback, useEffect, useMemo, useState} from 'react';
import {Todo} from '../todoTypes';
import {TodoInputContainerStyle, TodoInputFieldStyle} from "./TodoInput.style";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Button, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const titleRegExp = new RegExp('[A-Za-z0-9ㄱ-ㅎㅏ-ㅣ가-힣 ]');
const titleValidators = [
    (title: string) => title.length > 0,
    (title: string) => titleRegExp.test(title),
];

const contentValidators = [
    (content: string) => content.length > 0,
];


export const TodoInput: FunctionComponent<Todo.TodoInputProp> = function ({addTodoItem}) {
    const [todoTitle, setTodoTitle] = useState<string>('');
    const [todoContent, setTodoContent] = useState<string>('');
    const [todoDueTime, setTodoDueTime] = useState<Date>(new Date());
    const [isTitleValid, setIsTitleValid] = useState(false);
    const [isContentValid, setIsContentValid] = useState(false);

    const validityState = useMemo<boolean>(() => {
        return isTitleValid && isContentValid;
    }, [isTitleValid, isContentValid]);

    const clearForm = useCallback(() => {
        setTodoTitle('');
        setTodoContent('');
        setTodoDueTime(new Date());
    }, []);

    const onFormSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validityState) return;

        addTodoItem({title: todoTitle, content: todoContent, dueTime: todoDueTime});

        clearForm();
    }, [addTodoItem, clearForm, todoTitle, todoContent, todoDueTime, validityState]);

    const onTitleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const result = titleValidators.every(validator => validator(e.target.value));
        setIsTitleValid(result);

        setTodoTitle(e.target.value);
    }, []);

    const onContentChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const result = contentValidators.every(validator => validator(e.target.value));
        setIsContentValid(result);

        setTodoContent(e.target.value);
    }, []);

    useEffect(() => {
        setIsTitleValid(titleValidators.every(validator => validator(todoTitle)));
        setIsContentValid(contentValidators.every(validator => validator(todoContent)));
    }, [todoTitle, todoContent]);

    return (
        <TodoInputContainerStyle>
            <Form onSubmit={onFormSubmit}>
                <Form.Group controlId="todo-title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" onChange={onTitleChange} value={todoTitle}/>
                </Form.Group>
                <Form.Group controlId="todo-content">
                    <Form.Label>Content</Form.Label>
                    <Form.Control as="textarea" placeholder="Enter content" onChange={onContentChange}
                                  value={todoContent}/>
                </Form.Group>
                <DatePicker
                    className="form-control"
                    selected={todoDueTime}
                    onChange={date => setTodoDueTime(date!)}
                    showTimeInput
                    disabledKeyboardNavigation
                    dateFormat="yyyy MM dd h:mm aa"
                    shouldCloseOnSelect={false}
                />
                <TodoInputFieldStyle>
                    <Button type="submit" disabled={!validityState}
                            className={validityState ? '' : 'disabled'}>Add</Button>
                </TodoInputFieldStyle>
            </Form>
        </TodoInputContainerStyle>
    );
};
