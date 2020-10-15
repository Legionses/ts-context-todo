import React, {useContext, useState} from "react";
import {AppContext} from "../../configs/store";
import {StateProp} from "../App";
import { TaskEditingForm } from "./TaskEditingForm/TaskEditingForm";

export const TasksList = () => {
    const {tasks, deleteTask} = useContext(AppContext);
    const [editTaskID, setEditTaskID] = useState<null | string>(null);

    const renderTaskView = ({text, id}: StateProp) => (
        <>
            <span>{text}</span>
            <div>
                <button onClick={() => deleteTask(id)}>Delete</button>
                <button onClick={() => setEditTaskID(id)}>Edit</button>
            </div>
        </>
    );

    return (
        <main className="App-body">
            <ul>
                {tasks.length > 0 &&
                tasks.map((task) => (
                    <li key={task.id}>
                        {editTaskID === task.id ?
                            <TaskEditingForm
                                task={task}
                                setEditTaskID={setEditTaskID}
                            /> :
                            renderTaskView(task)
                        }
                    </li>
                ))}
            </ul>
        </main>
    )
}