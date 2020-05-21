import * as React from 'react';
import {FormEvent, FunctionComponent, useCallback, useEffect, useMemo, useState} from 'react';
import {Todo} from 'custom-types';
import {TodoInputContainerStyle, TodoInputFieldStyle} from "./TodoInput.style";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Button, ButtonGroup, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const titleRegExp = new RegExp('[A-Za-z0-9ㄱ-ㅎㅏ-ㅣ가-힣 ]');
const titleValidators = [
    (title: string) => title.length > 0,
    (title: string) => titleRegExp.test(title),
];

const contentValidators = [
    (content: string) => content.length > 0,
];


export const TodoInput: FunctionComponent<Todo.TodoInputProp> = function ({defaultTodoItem, addTodoItem, updateTodoItem, cancelUpdateTodoItem}) {
    const [todoTitle, setTodoTitle] = useState<string>(defaultTodoItem ? defaultTodoItem.title : '');
    const [todoContent, setTodoContent] = useState<string>(defaultTodoItem ? defaultTodoItem.content : '');
    const [todoDueTime, setTodoDueTime] = useState<Date>(defaultTodoItem ? defaultTodoItem.dueTime : new Date());
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

    const onHandleUpdate = function () {
        if (defaultTodoItem && updateTodoItem) {
            updateTodoItem({
                id: defaultTodoItem.id,
                title: todoTitle,
                content: todoContent,
                dueTime: todoDueTime,
            });
        }
    };

    useEffect(() => {
        setIsTitleValid(titleValidators.every(validator => validator(todoTitle)));
        setIsContentValid(contentValidators.every(validator => validator(todoContent)));
    }, [todoTitle, todoContent]);

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
                    dateFormat="yyyy MM dd h:mm aa"
                    shouldCloseOnSelect={false}
                />
                <TodoInputFieldStyle>
                    {
                        defaultTodoItem ?
                            <ButtonGroup>
                                <Button type="button" disabled={!validityState} onClick={onHandleUpdate}
                                        className={validityState ? '' : 'disabled'}>Update</Button>
                                <Button type="button" disabled={!validityState} onClick={cancelUpdateTodoItem}
                                        className={validityState ? '' : 'disabled'} variant="danger">Cancel</Button>
                            </ButtonGroup>
                            :
                            <Button type="submit" disabled={!validityState}
                                    className={validityState ? '' : 'disabled'}>Add</Button>
                    }
                </TodoInputFieldStyle>
            </Form>
        </TodoInputContainerStyle>
    );
};
