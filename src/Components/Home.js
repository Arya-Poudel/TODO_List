import React, { useState } from 'react';
import uniqid from 'uniqid';
import Tasks from './Tasks';
import Form from './Form';


const Home = ({addDefaultTask, defaultTasks, deleteTask, editTask}) => {

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
		}
		setIsTaskForm(false);
		addDefaultTask(task);
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
				/>
			}
		</div>
		{defaultTasks.map((defaultTask) => (
			<Tasks
			     key={defaultTask.id} 
			     task={defaultTask} 
			     deleteTask={deleteTask}
			     editTask ={editTask}
			/>
		))}
	  </>
	)
};

export default Home;