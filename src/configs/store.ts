import React from "react";
import {StateProp} from "../components/App";

interface contextInterf {
    createTask: Function,
    deleteTask: Function,
    editTask: Function,
    tasks: StateProp[]
}

export const AppContext = React.createContext<contextInterf>({
    createTask: () => {
    },
    deleteTask: () => {
    },
    editTask: () => {
    },
    tasks: [],
});