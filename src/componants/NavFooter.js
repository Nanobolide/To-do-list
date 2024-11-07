import React from "react";
import { FaListAlt, FaCheckSquare,FaPlusSquare,FaTrash } from 'react-icons/fa';


const NavFooter = ()=> (
    <footer className="d-flex justify-content-between p-3" id="mainFooter">
    <div className="btn-group w-100">
        <a href="#" className="btn btn-light flex-fill"><FaListAlt /></a>
        <a href="#" className="btn btn-light flex-fill"><FaCheckSquare /></a>
        <a href="#" className="btn btn-light flex-fill"><FaPlusSquare /></a>
    </div>
    <button className='btn btn-outline-dark bg-light'><FaTrash ></FaTrash>
    </button>
</footer>
)

export default NavFooter