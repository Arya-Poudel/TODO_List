import React, { useState, useEffect } from 'react';
import ProjectForm from './ProjectForm';
import Tasks from './Tasks';
import Home from './Home';


const Navbar = ({addProject, projects, addedTasks, deleteTask, editTask, addTask}) => {

	const showNav = () =>{
		const burger = document.querySelector('.burger');
		const nav = document.querySelector('.nav-links');
		nav.classList.toggle('nav-active');
		burger.classList.toggle('toggle');
	}

	const [showProjects, setShowProjects] = useState(true);

	const [projectToShow, setProjectToShow] = useState('Default');

	const handleProjectClick = (e) => {
		let projectToShowName = e.target.textContent;
		setProjectToShow(projectToShowName);
	}
	
	useEffect(() => {
		setShowProjects(true);
	}, [projects])

	return(
		<>
		<div className = "top-nav">
			<div className="burger toggle" onClick={showNav}>
				<div className = "line1"></div>
				<div className = "line2"></div>
				<div className = "line3"></div>
			</div>
			<h1>TODO LIST</h1>
			<ul className = "nav-links nav-active">				
				<li><ProjectForm addProject = {addProject}/></li>
				<div className = "projects-show">
					<li>Projects</li>
					{!showProjects &&
						<span className="material-icons-outlined" onClick = {() => setShowProjects(true)}>expand_more</span>
					}
					{showProjects &&
						<span className="material-icons-outlined" onClick = {() => setShowProjects(false)}>expand_less</span>
					}
				</div>
				<div className = "projects">
					{showProjects && projects.map((project) => (
						<li key = {project.key} onClick = {handleProjectClick}>{project.name}</li>
					))}
				</div>
				
			</ul>
		</div>
		
		<h2 className = "project_to_show">{projectToShow} </h2>
		{addedTasks.map((addedTask) => (
			<Tasks
			     key={addedTask.id} 
			     task={addedTask} 
			     deleteTask={deleteTask}
			     editTask ={editTask}
			     projects = {projects}
			     projectToShow = {projectToShow}
			/>
		))}
		 <Home 
	          addTask = {addTask} 
	          projects = {projects}
	          projectToShow = {projectToShow}
	      />
		</>
	)
}

export default Navbar;