import React, {useContext, useState} from "react";
import {AppContext} from "../../../configs/store";
import {StateProp} from "../../App";

interface TaskEditingFormProps {
    task: StateProp,
    setEditTaskID: Function,
}

export const TaskEditingForm = ({task: {id, text}, setEditTaskID}: TaskEditingFormProps) => {
    const [inputText, setInputText] = useState(text);
    const {editTask} = useContext(AppContext);

    const onSave = () => {
        if (!inputText.length) return;
        editTask({text: inputText, id});
        return setEditTaskID(null);
    }

    return (
        <>
            <input
                value={inputText}
                onChange={({target: {value}}) => setInputText(value)}
            />
            <div>
                <button onClick={() => setEditTaskID(null)}>Deny</button>
                <button onClick={onSave}>Save</button>
            </div>
        </>
    )
}