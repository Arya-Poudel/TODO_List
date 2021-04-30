import React, { useState, useEffect } from 'react';
import ProjectForm from './ProjectForm';

const Navbar = ({addProject, projects}) => {

	const showNav = () =>{
		const burger = document.querySelector('.burger');
		const nav = document.querySelector('.nav-links');
		//toggle nav
		nav.classList.toggle('nav-active');

		//burger animation
		burger.classList.toggle('toggle');
	}

	const [showProjects, setShowProjects] = useState(true);

	const showTaskInProject = (e) => {
		console.log(projects);
		console.log(e.target.textContent)
	}
	
	useEffect(() => {
		setShowProjects(true)
	}, [projects])

	return(
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
							<li key={project.key} onClick = {showTaskInProject}>{project.name}</li>	
					))}
				</div>
			</ul>
		</div>
	)
}

export default Navbar;