import React from 'react';
import './style.css';
import ToDoList from './ToDoList';
import NavFooter from './NavFooter';
import AddTask from './AddTask';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

const App = () => { 
    return (
      <BrowserRouter>
      <section id="todo">
        <h1>Liste de Tâches</h1>
        
        {/* Liens de navigation */}
        <nav>
          <NavLink to="/:filter?">Liste des Tâches</NavLink>
          <NavLink to="/add-task">Ajouter une tâche</NavLink>
        </nav>
        
        <Routes>
          <Route path="/" element={<ToDoList />} />
          <Route path="/add-task" element={<AddTask />} />
        </Routes>

        <NavFooter />
      </section>
    </BrowserRouter>
    );
}

export default App;
