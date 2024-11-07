import React from 'react';
import './style.css';
import ToDoList from './ToDoList';
import NavFooter from './NavFooter';

class App extends React.Component{
    render(){
      return (
        <section id="todo">
        <h1>Liste de Tâches</h1>
            <ToDoList />
            <NavFooter />
    </section>
      )
    }
  }

  export default App
 