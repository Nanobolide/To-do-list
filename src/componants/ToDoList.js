import React  from "react";

const ToDoList = () => (
    <ul className="list-group">
    <li className="list-group-item">
        Ranger la vaisselle
        <button className="btn btn-sm btn-success">Valider</button>
    </li>
    <li className="list-group-item">
        Répondre à l'appel d'offres
        <button className="btn btn-sm btn-success">Valider</button>
    </li>
    <li className="list-group-item">
        Signer le contrat
        <button className="btn btn-sm btn-success">Valider</button>
    </li>
    <li className="list-group-item">
        Ranger le salon
        <button className="btn btn-sm btn-success">Valider</button>
    </li>
</ul>
)

export default ToDoList