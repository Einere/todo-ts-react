import * as React from 'react';
import {FormEvent, FunctionComponent, useCallback, useMemo, useState} from 'react';
import {Todo} from '../todoTypes';
import {TodoInputContainerStyle, TodoInputFieldStyle} from "./TodoInput.style";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function getNextId(todoInfos: Todo.TodoInfoType[]) {
    return todoInfos.reduce((acc, {id}) => {
        return acc < id ? id : acc;
    }, -1) + 1;
}

function makeTodoInfo(id: number, title: string, content: string, dueTime: Date): Todo.TodoInfoType {
    return {
        id,
        title,
        content,
        createTime: new Date(),
        dueTime,
        done: false,
    };
}

const titleRegExp = new RegExp('[A-Za-z0-9ㄱ-ㅎㅏ-ㅣ가-힣 ]');
const titleValidators = [
    (title: string) => title.length > 0,
    (title: string) => titleRegExp.test(title),
];

const contentValidators = [
    (content: string) => content.length > 0,
];


export const TodoInput: FunctionComponent<Todo.TodoInputProp> = function ({todoInfos, setTodoInfos}) {
    const [todoTitle, setTodoTitle] = useState<string>('');
    const [todoContent, setTodoContent] = useState<string>('');
    const [todoDueTime, setTodoDueTime] = useState<Date>(new Date());
    const [isTitleValid, setIsTitleValid] = useState(false);
    const [isContentValid, setIsContentValid] = useState(false);

    const validityState = useMemo<boolean>(() => {
        return isTitleValid && isContentValid;
    }, [isTitleValid, isContentValid]);

    const formSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validityState) return;

        const nextId = getNextId(todoInfos);
        const newInfo = makeTodoInfo(nextId, todoTitle, todoContent, todoDueTime);
        setTodoInfos([...todoInfos, newInfo]);
    }, [todoInfos, setTodoInfos, todoTitle, todoContent, todoDueTime, validityState]);

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

    /*const onDueTimeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setTodoDueTime(new Date(e.target.value));
    }, []);*/

    const handleEnter = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {

        if (e.keyCode === 13) {
            const form = e.currentTarget.form as HTMLFormElement;
            const index = Array.from(form).indexOf(e.target as Element);
            (form.elements[index + 1] as HTMLElement).focus();
        }
    }, []);

    return (
        <TodoInputContainerStyle>
            <form onSubmit={formSubmit}>
                <TodoInputFieldStyle>
                    <label htmlFor={"todo-title"}>Title</label>
                    <input type={"text"} name={"todo-title"} id={"todo-title"}
                           className={isTitleValid ? '' : 'invalid'}
                           onChange={onTitleChange} onKeyDown={handleEnter}/>
                </TodoInputFieldStyle>
                <TodoInputFieldStyle>
                    <label htmlFor={"todo-content"}>Content</label>
                    <input type={"textarea"} name={"todo-content"} id={"todo-content"}
                           className={isContentValid ? '' : 'invalid'}
                           onChange={onContentChange} onKeyDown={handleEnter}/>
                </TodoInputFieldStyle>
                <TodoInputFieldStyle>
                    <DatePicker
                        selected={todoDueTime}
                        onChange={date => setTodoDueTime(date!)}
                        showTimeInput
                        disabledKeyboardNavigation
                        dateFormat="yyyy MM dd h:mm aa"
                        shouldCloseOnSelect={false}
                    />
                </TodoInputFieldStyle>

                <button type={"submit"} disabled={!validityState}>Add</button>
            </form>
        </TodoInputContainerStyle>
    );
};
