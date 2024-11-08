import React  from "react";
import ToDo from "./ToDo";

const ToDoList = ({tasks}) => (
    <ul className="list-group">
        {
             tasks.map((task, index) => <ToDo key={index} task={task} />)
        }
    </ul>
)

export default ToDoList


 
 