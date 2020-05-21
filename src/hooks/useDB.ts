import {useCallback, useContext, useState} from "react";
import {dbContext, todoCollectionName} from "../context/DBContext";
import {Todo} from "custom-types";
import {deepCopy} from "../util/deepCopy";

function getNextId(todoInfos: Todo.TodoInfoType[]) {
    return todoInfos.reduce((acc, {id}) => {
        return acc < id ? id : acc;
    }, -1) + 1;
}

function makeTodoInfo(id: number, title: string, content: string, dueTime: Date): Todo.TodoInfoType {
    return {
        id,
        title,
        content,
        createTime: new Date(),
        dueTime,
        done: false,
    };
}

export function useDB() {
    const db = useContext(dbContext);
    const todoDB = db.getCollection<Todo.TodoInfoType>(todoCollectionName);
    todoDB.data = todoDB.data.map((data) => {
        data.createTime = new Date(data.createTime);
        data.dueTime = new Date(data.dueTime);

        return data;
    });

    const [todoInfos, setTodoInfos] = useState<Todo.TodoInfoType[]>(todoDB.data);

    const addTodoItem = useCallback(({title, content, dueTime}: Todo.TodoInfoTypeForAdd) => {
        const nextId = getNextId(todoInfos);
        const newInfo = makeTodoInfo(nextId, title, content, dueTime);
        setTodoInfos([...todoInfos, newInfo]);

        todoDB.insert(newInfo);
        db.saveDatabase();
    }, [todoInfos, setTodoInfos, db, todoDB]);

    const toggleDone = useCallback((id: number) => {
        const copiedTodoInfos = deepCopy<Todo.TodoInfoType[]>(todoInfos);
        const indexForToggle = copiedTodoInfos.findIndex((todoInfo) => todoInfo.id === id);
        copiedTodoInfos[indexForToggle].done = !copiedTodoInfos[indexForToggle].done;
        setTodoInfos(copiedTodoInfos);

        todoDB.findAndUpdate({
            id: id
        }, (todoInfo) => {
            return {
                ...todoInfo,
                done: !todoInfo.done
            };
        });
        db.saveDatabase();
    }, [todoInfos, setTodoInfos, db, todoDB]);

    const deleteTodoItem = useCallback((id: number) => {
        const copiedTodoInfos = deepCopy<Todo.TodoInfoType[]>(todoInfos);
        const indexForRemove = copiedTodoInfos.findIndex((todoInfo) => todoInfo.id === id);
        copiedTodoInfos.splice(indexForRemove, 1);
        setTodoInfos(copiedTodoInfos);

        todoDB.findAndRemove({
            id: id
        });
        db.saveDatabase();
    }, [todoInfos, setTodoInfos, db, todoDB]);

    return {
        todoDB,
        todoInfos,
        addTodoItem,
        toggleDone,
        deleteTodoItem,
    }
}