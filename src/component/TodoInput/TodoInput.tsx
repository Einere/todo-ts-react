import * as React from 'react';
import {FormEvent, FunctionComponent, useCallback, useState} from 'react';
import {Todo} from '../todoTypes';
import {TodoInputContainerStyle, TodoInputFieldStyle} from "./TodoInput.style";

function getNextId(todoInfos: Todo.TodoInfoType[]) {
    return todoInfos.reduce((acc, {id}) => {
        return acc < id ? id : acc;
    }, 0);
}

function makeTodoInfo(id: number, title: string, content: string, dueTime: Date): Todo.TodoInfoType {
    return {
        id,
        title,
        content,
        createTime: new Date(),
        dueTime
    };
}

export const TodoInput: FunctionComponent<Todo.TodoInputProp> = function ({todoInfos, setTodoInfos}) {
    const [todoTitle, setTodoTitle] = useState<string>('');
    const [todoContent, setTodoContent] = useState<string>('');
    const [todoDueTime, setTodoDueTime] = useState<Date>(new Date());

    const formSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const nextId = getNextId(todoInfos);
        const newInfo = makeTodoInfo(nextId, todoTitle, todoContent, todoDueTime);
        setTodoInfos([...todoInfos, newInfo]);
    }, [todoInfos, setTodoInfos, todoTitle, todoContent, todoDueTime]);

    const onTitleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setTodoTitle(e.target.value);
    }, []);

    const onContentChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setTodoContent(e.target.value);
    }, []);

    const onDueTimeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setTodoDueTime(new Date(e.target.value));
    }, []);

    const today = new Date().toISOString().split('T')[0];

    return (
        <TodoInputContainerStyle>
            <form onSubmit={formSubmit}>
                <TodoInputFieldStyle>
                    <label htmlFor={"todo-title"}>Title</label>
                    <input type={"string"} name={"todo-title"} id={"todo-title"} onChange={onTitleChange}/>
                </TodoInputFieldStyle>
                <TodoInputFieldStyle>
                    <label htmlFor={"todo-content"}>Content</label>
                    <input type={"textarea"} name={"todo-content"} id={"todo-content"} onChange={onContentChange}/>
                </TodoInputFieldStyle>
                <TodoInputFieldStyle>
                    <label htmlFor={"todo-due-time"}>Due Time</label>
                    <input type={"date"} name={"todo-due-time"} id={"todo-due-time"} defaultValue={today}
                           onChange={onDueTimeChange}/>
                </TodoInputFieldStyle>
                <button type={"submit"}>Add</button>
            </form>
        </TodoInputContainerStyle>
    );
};
