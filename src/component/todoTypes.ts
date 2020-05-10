export namespace Todo {
    export interface TodoInfoType {
        id: number;
        title: string;
        content: string;
        createTime: Date;
        dueTime: Date;
        done: boolean;
    }

    export type TodoInfoTypeForAdd = Pick<TodoInfoType, 'title' | 'content' | 'dueTime'>

    export interface TodoInputProp {
        todoInfos: TodoInfoType[];
        addTodoItem: (todoInfo: TodoInfoTypeForAdd) => void;
    }

    export interface TodoListProp extends Omit<TodoInputProp, 'addTodoItem'> {
        toggleDone: (id: TodoInfoType["id"]) => void;
        deleteTodoItem: (id: TodoInfoType["id"]) => void;
    }

    export interface TodoItemProp extends TodoListProp {
        todoInfo: TodoInfoType;
    }

    export type EmptyTodoItemProp = Pick<TodoInputProp, "todoInfos">;
}
