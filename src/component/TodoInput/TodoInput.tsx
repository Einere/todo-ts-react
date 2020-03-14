import * as React from 'react';
import {FormEvent, FunctionComponent, useCallback, useMemo, useState} from 'react';
import {Todo} from '../todoTypes';
import {TodoInputContainerStyle, TodoInputFieldStyle} from "./TodoInput.style";

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
        console.log(nextId);
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

    const onDueTimeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setTodoDueTime(new Date(e.target.value));
    }, []);

    return (
        <TodoInputContainerStyle>
            <form onSubmit={formSubmit}>
                <TodoInputFieldStyle>
                    <label htmlFor={"todo-title"}>Title</label>
                    <input type={"string"} name={"todo-title"} id={"todo-title"} onChange={onTitleChange}
                           className={isTitleValid ? '' : 'invalid'}/>
                </TodoInputFieldStyle>
                <TodoInputFieldStyle>
                    <label htmlFor={"todo-content"}>Content</label>
                    <input type={"textarea"} name={"todo-content"} id={"todo-content"} onChange={onContentChange}
                           className={isContentValid ? '' : 'invalid'}/>
                </TodoInputFieldStyle>
                <TodoInputFieldStyle>
                    <label htmlFor={"todo-due-time"}>Due Time</label>
                    <input type={"datetime-local"} name={"todo-due-time"} id={"todo-due-time"}
                           onChange={onDueTimeChange}/>
                </TodoInputFieldStyle>
                <button type={"submit"}>Add</button>
            </form>
        </TodoInputContainerStyle>
    );
};
