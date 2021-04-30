import './App.css';
import React, { useState } from 'react';
import Navbar from './Components/Navbar';

function App() {

  const [addedTasks, setAddedTasks] = useState([]);

  const [projects, setProjects] = useState([{name:"Default", key:"default"}]);

  const addProject = (project) => setProjects([...projects, project]);
  
  const addTask = (task) => setAddedTasks([...addedTasks, task]);

  const deleteTask = (id) => setAddedTasks(addedTasks.filter(addedTask => addedTask.id !== id));

  const editTask = (id, newTask) => setAddedTasks(addedTasks.map(addedTask => (addedTask.id === id)? newTask : addedTask));


  return (
    <div className="App">
      <Navbar 
          addProject = {addProject}
          projects = {projects}
          addedTasks = {addedTasks}
          deleteTask = {deleteTask}
          editTask = {editTask}
          addTask = {addTask}
      />
    </div>
  );
}

export default App;