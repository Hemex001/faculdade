/* slr para criar o componente */
import { useNavigate } from "react-router-dom";
import "./ToDoList.css";
import { useState } from 'react'

const ListItem = ({ toDoItem }) => {
    return (
        <div
            className="listItem"
            style={toDoItem.done ? { backgroundColor: "#b6ebb5" } : null}
        >
            {toDoItem.name}
        </div>
    );
};

const ToDoList = ({ pageTitle }) => {
    const navigate = useNavigate();
    const [ToDoList, setToDoList] = useState([]);
    const [inputValue, setInputValue] = useState();

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const onClickAddTask = () => {
        if (!inputValue) return;
        setToDoList([...ToDoList, { name: inputValue, done: false }]);
        setInputValue("");
    }

    return (
        <div>
            <div className="header">
                <h1>{pageTitle}</h1>
            </div>
            <div className="inputContainer">
                <label for="taskText" className="inputLabel" >Digite sua tarefa: </label>
                <input
                    id="taskText"
                    name="taskText"
                    className="input"
                    value={inputValue}
                    onChange={onInputChange} />
                <button className="addButton" onClick={onClickAddTask}>+</button>
            </div>
            <div className="list">
                {ToDoList.map(toDoItem => (
                    <ListItem toDoItem={toDoItem} />
                ))}
            </div>
            <button onClick={() => navigate(-1)}>Voltar</button>
        </div>
    );
}

export default ToDoList;