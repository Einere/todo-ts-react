export namespace Todo {
    export interface TodoInfoType {
        id: number;
        title: string;
        content: string;
        createTime: Date;
        dueTime: Date;
        done: boolean;
    }

    export interface TodoInputProp {
        todoInfos: TodoInfoType[];
        setTodoInfos: any;
    }

    export interface TodoListProp {
        todoInfos: TodoInfoType[];
        setTodoInfos: any;
        deleteTodoItem: any;
    }

    export interface TodoItemProp {
        todoInfos: TodoInfoType[];
        todoInfo: TodoInfoType;
        setTodoInfos: any;
        deleteTodoItem: any;
    }

    export interface TodoDetailType {

    }
}
