import React, {useState} from 'react';
import './App.css';
import {AppContext} from "../configs/store";
import {getRandomString} from '../configs/utils';
import {CreateTaskForm} from './CreateTaskForm/CreateTaskForm';
import {TasksList} from "./TasksList/TasksList";

export interface StateProp {
    text: string;
    id: string;
}

function App() {
    const [tasks, setTasks] = useState<StateProp[]>([]);

    const createTask = (text: string): void => {
        setTasks(prevTasks => [...prevTasks, {text, id: getRandomString()}])
    }

    const deleteTask = (targetId: string): void => {
        setTasks(prevTasks => prevTasks.filter(({id}) => id !== targetId))
    }

    const editTask = (updatedTask: StateProp) => {
        setTasks(prevTasks => prevTasks.map((task) =>
            task.id === updatedTask.id ?
                updatedTask :
                task
        ))
    }

    return (
        <AppContext.Provider value={{tasks, deleteTask, createTask, editTask}}>
            <div className="App">
                <CreateTaskForm/>
                <TasksList/>
            </div>
        </AppContext.Provider>
    );
}

export default App;
