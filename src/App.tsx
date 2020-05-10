import * as React from 'react';
import './App.css';
import Home from "./page/Home/Home";
import {db, dbContext, todoCollectionName} from "./context/DBContext";
import {Todo} from './component/todoTypes';

const App = () => {
    db.loadDatabase({});
    const todoDB = db.getCollection(todoCollectionName);
    if (!todoDB) db.addCollection<Todo.TodoInfoType>(todoCollectionName);

    return (
        <div className="App">
            <dbContext.Provider value={db}>
                <Home/>
            </dbContext.Provider>
        </div>
    );
};

export default App;
