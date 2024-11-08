import React from 'react';
import '../css/style.css';
import ToDoList from './ToDoList';
import NavFooter from './NavFooter';
import AddTask from './AddTask';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import initialData from '../initialData';


// Composant fonctionnel
const App = () => { 
    return (
      <BrowserRouter>
      <section id="todo">
        <h1>Liste de Tâches</h1>

        {/* Liens de navigation */}


            {/*  Définition des routes  dans app */}
        <Routes>
          <Route path="/" element={<ToDoList tasks={initialData} />} />
          <Route path="/add-task" element={<AddTask />} />
        </Routes>

        <NavFooter />
      </section>
    </BrowserRouter> 
    );
}

export default App;
