import * as React from 'react';
import {FunctionComponent, useCallback, useState} from 'react';
import {Todo} from "../todoTypes";
import {TodoItemStyle} from './TodoItem.style';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faTrashAlt} from "@fortawesome/free-solid-svg-icons";

export const TodoItem: FunctionComponent<Todo.TodoItemProp> = function ({todoInfo, deleteTodoItem, toggleDone}) {
    const [isDetail, setIsDetail] = useState<boolean>(false);

    const toggleIsDetail = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLElement;
        if (target.classList.contains('icon-container') || target.classList.contains('icon')) return;
        setIsDetail(!isDetail);
    }, [isDetail]);

    const onHandleToggle = function () {
        toggleDone(todoInfo.id);
    };

    const onHandleDelete = function () {
        deleteTodoItem(todoInfo.id);
    };

    return (
        <TodoItemStyle expired={todoInfo.dueTime.getTime() < Date.now()} done={todoInfo.done} onClick={toggleIsDetail}>
            <h3>{todoInfo.title}</h3>
            <p className={isDetail ? '' : 'invisible'}>{todoInfo.content}</p>
            <p>
                <span className={isDetail ? '' : 'invisible'}>{todoInfo.createTime.toLocaleString()} / </span>
                <span>{todoInfo.dueTime.toLocaleString()}</span>
            </p>
            <div className="icon-container" onClick={onHandleToggle}>
                <FontAwesomeIcon icon={faCheck} className="icon done"/>
            </div>
            <div className="icon-container" onClick={onHandleDelete}>
                <FontAwesomeIcon icon={faTrashAlt} className="icon delete"/>
            </div>
        </TodoItemStyle>
    );
};
