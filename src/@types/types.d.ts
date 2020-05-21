declare module 'custom-types' {
    export namespace Todo {
        interface TodoInfoType {
            id: number;
            title: string;
            content: string;
            createTime: Date;
            dueTime: Date;
            done: boolean;
        }

        type TodoInfoTypeForAdd = Pick<TodoInfoType, 'title' | 'content' | 'dueTime'>

        interface TodoInputProp {
            todoInfos: TodoInfoType[];
            addTodoItem: (todoInfo: TodoInfoTypeForAdd) => void;
        }

        interface TodoListProp extends Omit<TodoInputProp, 'addTodoItem'> {
            toggleDone: (id: TodoInfoType["id"]) => void;
            deleteTodoItem: (id: TodoInfoType["id"]) => void;
        }

        interface TodoItemProp extends TodoListProp {
            todoInfo: TodoInfoType;
        }

        type EmptyTodoItemProp = Pick<TodoInputProp, "todoInfos">;
    }
}
