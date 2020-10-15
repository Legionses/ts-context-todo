import React, {useContext, useState} from "react";
import {AppContext} from "../../configs/store";

export const CreateTaskForm = () => {
    const {createTask} = useContext(AppContext);
    const [inputText, setInputText] = useState("");

    const handleInputChange = ({target: {value}}: any) => setInputText(value);

    const onSubmit = () => {
        if (!inputText.length) return;

        createTask(inputText);
        return setInputText("");
    }
    return (
        <header className="App-header">
            <span>New task</span>
            <input
                value={inputText}
                onChange={handleInputChange}
            />
            <button onClick={onSubmit}> Create</button>
        </header>

    )
}