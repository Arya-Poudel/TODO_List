import React, { useState } from 'react';
import uniqid from 'uniqid';
import Form from './Form';


const Home = ({addTask, projects, projectToShow}) => {

	const [isTaskForm, setIsTaskForm] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		const task = {
			id: uniqid(),
			name : e.target.name.value,
			description : e.target.description.value,
			duedate : e.target.duedate.value,
			priority : e.target.priority.value,
			completed: 'Not completed',
			in_project: e.target.in_project.value,
		}
		setIsTaskForm(false);
		addTask(task);
	}

	const closeForm = () => {
		setIsTaskForm(false);
	}

	return(
		<div className = "home">
			<button className = "new-task-btn" onClick = {() => setIsTaskForm(true)}>Add New Task</button>
			{isTaskForm &&
				<Form 
					handleSubmit={handleSubmit}
					closeForm={closeForm}
					task={{id: '', name: '', description:'', duedate:'', priority:''}}
					projects = {projects}
					projectToShow = {projectToShow}
				/>
			}
		</div>
	)
};

export default Home;