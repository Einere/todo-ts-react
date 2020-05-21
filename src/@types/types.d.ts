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

        type TodoInfoTypeForAdd = Pick<TodoInfoType, 'title' | 'content' | 'dueTime'> & Partial<TodoInfoType>;
        type TodoInfoTypeForUpdate = Pick<TodoInfoType, 'id' | 'title' | 'content' | 'dueTime'> & Partial<TodoInfoType>;

        interface TodoInputProp {
            addTodoItem: (todoInfo: TodoInfoTypeForAdd) => void;
        }

        interface TodoUpdateProp {
            defaultTodoItem: TodoInfoType;
            updateTodoItem: (todoInfo: TodoInfoTypeForUpdate) => void;
            cancelUpdateTodoItem?: () => void;
        }

        interface TodoListProp extends Omit<TodoUpdateProp, 'defaultTodoItem'> {
            todoInfos: TodoInfoType[];
            toggleDone: (id: TodoInfoType["id"]) => void;
            deleteTodoItem: (id: TodoInfoType["id"]) => void;
        }

        interface TodoItemProp extends Omit<TodoListProp, 'todoInfos'> {
            todoInfo: TodoInfoType;
        }

        type EmptyTodoItemProp = Pick<TodoInputProp, "todoInfos">;

        interface ValidatorOption {
            defaultTodoItem?: TodoInfoType;
            onHandleSubmit: (todoInfo: any) => void;
        }
    }
}
