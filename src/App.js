import './App.css';
import React, { useState } from 'react';
import Navbar from './Components/Navbar';


function App() {

  const [defaultTasks, setDefaultTasks] = useState([]);

  const [projects, setProjects] = useState([{name:"Default", key:"default"}]);

  const addProject = (project) => {
    setProjects([...projects, project]);
  }

  const addDefaultTask = (task) => {
    setDefaultTasks([...defaultTasks, task]);
  }

  const deleteTask = (id) => {
    setDefaultTasks(defaultTasks.filter(defaultTask => defaultTask.id !== id))
  }

  const editTask = (id, newTask) => {
    setDefaultTasks(defaultTasks.map(defaultTask => (defaultTask.id === id)? newTask : defaultTask))
  }


  return (
    <div className="App">
      <Navbar 
          addProject = {addProject}
          projects = {projects}
          defaultTasks = {defaultTasks}
          deleteTask = {deleteTask}
          editTask = {editTask}
          addDefaultTask = {addDefaultTask}
      />
    </div>
  );
}

export default App;