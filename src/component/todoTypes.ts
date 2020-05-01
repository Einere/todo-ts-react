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
        setTodoInfos: (newTodoInfos: TodoInfoType[]) => void;
    }

    export interface TodoListProp extends TodoInputProp {
        deleteTodoItem: (id: TodoInfoType["id"]) => void;
    }

    export interface TodoItemProp extends TodoListProp {
        todoInfo: TodoInfoType;
    }

    export type EmptyTodoItemProp = Pick<TodoInputProp, "todoInfos">;
}
