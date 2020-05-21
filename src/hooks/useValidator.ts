import * as React from 'react';
import {FormEvent, useCallback, useEffect, useMemo, useState} from 'react';

const titleRegExp = new RegExp('[A-Za-z0-9ㄱ-ㅎㅏ-ㅣ가-힣 ]');
const titleValidators = [
    (title: string) => title.length > 0,
    (title: string) => titleRegExp.test(title),
];

const contentValidators = [
    (content: string) => content.length > 0,
];

export function useValidator(defaultTodoItem: any, addTodoItem: any) {
    const [todoTitle, setTodoTitle] = useState<string>(defaultTodoItem ? defaultTodoItem.title : '');
    const [todoContent, setTodoContent] = useState<string>(defaultTodoItem ? defaultTodoItem.content : '');
    const [todoDueTime, setTodoDueTime] = useState<Date>(defaultTodoItem ? defaultTodoItem.dueTime : new Date());
    const [isTitleValid, setIsTitleValid] = useState(false);
    const [isContentValid, setIsContentValid] = useState(false);

    const validity = useMemo<boolean>(() => {
        return isTitleValid && isContentValid;
    }, [isTitleValid, isContentValid]);

    const clearForm = useCallback(() => {
        setTodoTitle('');
        setTodoContent('');
        setTodoDueTime(new Date());
    }, []);

    const onFormSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validity) return;

        addTodoItem({title: todoTitle, content: todoContent, dueTime: todoDueTime});

        clearForm();
    }, [addTodoItem, clearForm, todoTitle, todoContent, todoDueTime, validity]);

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

    return {
        validity,
        todoTitle,
        todoContent,
        todoDueTime,
        isTitleValid,
        isContentValid,
        clearForm,
        onFormSubmit,
        onTitleChange,
        onContentChange,
        setTodoDueTime,
    }
}
