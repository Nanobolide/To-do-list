import React from "react";
import { FaListAlt, FaCheckSquare,FaPlusSquare,FaTrash } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

// Liens de navigation
const NavFooter = ()=> (
    <footer className="d-flex justify-content-between p-3" id="mainFooter">
    <div className="btn-group w-100">
        <NavLink to="/" className="btn btn-light flex-fill"><FaListAlt /></NavLink>
        <NavLink to="/completed" className="btn btn-light flex-fill"><FaCheckSquare /></NavLink>
        <NavLink to="/add-task" className="btn btn-light flex-fill"><FaPlusSquare /></NavLink>
    </div>
    <button className='btn btn-outline-dark bg-light'><FaTrash ></FaTrash>
    </button>
</footer>
)

export default NavFooter