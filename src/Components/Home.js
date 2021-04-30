import React, { useState } from 'react';
import uniqid from 'uniqid';
import Tasks from './Tasks';
import Form from './Form';


const Home = ({addDefaultTask, defaultTasks, deleteTask, editTask, projects}) => {

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
		addDefaultTask(task);
		console.log(task);
	}

	const closeForm = () => {
		setIsTaskForm(false);
	}

	return(
	  <>
		<div className = "home">
			<button className = "new-task-btn" onClick = {() => setIsTaskForm(true)}>Add New Task</button>
			{isTaskForm &&
				<Form 
					handleSubmit={handleSubmit}
					closeForm={closeForm}
					task={{id: '', name: '', description:'', duedate:'', priority:''}}
					projects = {projects}
				/>
			}
		</div>
		{defaultTasks.map((defaultTask) => (
			<Tasks
			     key={defaultTask.id} 
			     task={defaultTask} 
			     deleteTask={deleteTask}
			     editTask ={editTask}
			     projects = {projects}
			/>
		))}
	  </>
	)
};

export default Home;