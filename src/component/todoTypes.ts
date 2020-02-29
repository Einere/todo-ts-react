export namespace Todo {
    export interface TodoInfoType {
        id: number;
        title: string;
        content: string;
        createTime: Date;
        dueTime: Date;
    }

    export interface TodoInputProp {
        todoInfos: TodoInfoType[];
        setTodoInfos: any;
    }

    export interface TodoListProp {
        todoInfos: TodoInfoType[];
    }

    export interface TodoItemProp {
        todoInfo: TodoInfoType;
    }

    export interface TodoDetailType {

    }
}
