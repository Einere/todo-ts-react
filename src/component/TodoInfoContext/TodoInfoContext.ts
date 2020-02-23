import {createContext} from 'react';

export interface TodoInfoType {
    id: number;
    title: string;
    content: string;
    createTime: Date;
    dueTime: Date;
}

export interface TodoInfoContextType {
    todoInfoList: TodoInfoType[];
}

export const TodoInfoContext = createContext<TodoInfoContextType>({todoInfoList: []});
