import * as React from 'react';
import * as Loki from 'lokijs';

export const db = new Loki('TodoDB', {
    env: "BROWSER",
});

export const dbContext = React.createContext<Loki>(db);

export const todoCollectionName = 'Todo';
