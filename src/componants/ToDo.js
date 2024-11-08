import React from 'react'

const ToDo = ({task}) => {
        return (
                <li className="list-group-item">
                    {task.name}
                    <button className="btn btn-sm btn-success">Valider</button>
                </li>
        )
}

export default ToDo