import React, { useState, useEffect } from 'react';
import ProjectForm from './ProjectForm';
import Tasks from './Tasks';
import Home from './Home';


const Navbar = ({addProject, projects, defaultTasks, deleteTask, editTask, addDefaultTask}) => {

	const showNav = () =>{
		const burger = document.querySelector('.burger');
		const nav = document.querySelector('.nav-links');
		//toggle nav
		nav.classList.toggle('nav-active');

		//burger animation
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
			<div className="burger" onClick={showNav}>
				<div className = "line1"></div>
				<div className = "line2"></div>
				<div className = "line3"></div>
			</div>
			<h1>TODO LIST</h1>

			
			<ul className = "nav-links">
				<li>Home</li>
				
				<li><ProjectForm addProject = {addProject} projects = {projects}/></li>

				<div className = "projects-show">
					<li>Projects</li>
					{!showProjects &&
						<span className="material-icons-outlined" style = {{ "cursor" : "pointer"}} onClick = {() => setShowProjects(true)}>expand_more</span>
					}
					{showProjects &&
						<span className="material-icons-outlined" style = {{ "cursor" : "pointer"}} onClick = {() => setShowProjects(false)}>expand_less</span>
					}
				</div>
				<div className = "projects">
					{showProjects && projects.map((project) => (
							<li key={project.key} onClick = {handleProjectClick}>{project.name}</li>	
					))}
				</div>
				
			</ul>
		</div>
		 <Home 
	          addDefaultTask = {addDefaultTask} 
	          deleteTask = {deleteTask}
	          defaultTasks = {defaultTasks}
	          editTask = {editTask}
	          projects = {projects}
	          projectToShow = {projectToShow}
	      />
		<h2 style={{"textAlign":"center","textTransform":"uppercase","textDecoration":"underline"}} id = "project_to_show">{projectToShow} </h2>
		{defaultTasks.map((defaultTask) => (
					<Tasks
					     key={defaultTask.id} 
					     task={defaultTask} 
					     deleteTask={deleteTask}
					     editTask ={editTask}
					     projects = {projects}
					     projectToShow = {projectToShow}
					/>
				))}
		</>
	)
}

export default Navbar;