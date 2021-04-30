import React, {useState} from 'react';
import Form from './Form';
import uniqid from 'uniqid';

const Tasks = ({task, deleteTask, editTask, projects, projectToShow}) => {

	const [showDescription , setShowDescription] = useState(false);
	const [showEditForm, setShowEditForm] = useState(false);

	const openEditForm = () => {
		setShowEditForm(true);
	}

	const closeEditForm = () => {
		setShowEditForm(false);
	}

	const handleFormEdit = (e) =>{
		e.preventDefault();
		const newTask = {
			id: uniqid(),
			name : e.target.name.value,
			description : e.target.description.value,
			duedate : e.target.duedate.value,
			priority : e.target.priority.value,
			completed: task.completed,
			in_project: e.target.in_project.value,
		}
		setShowEditForm(false);
		editTask(task.id, newTask);
	}

	const handleCheckTask = () => {
		task.completed = task.completed === 'Completed' ? 'Not completed' : 'Completed';	
		editTask(task.id, task);
	}

	return(
	<>
	{(projectToShow === task.in_project) && 
	 <div className = {task.completed === 'Completed' ? 'tasks completed' : 'tasks'}>
		<div className = "task-title">
			<div className = "priority-div">
				<div className={task.priority}></div>
				<h2>{task.name}</h2>
			</div>
			<div className = 'task-icons'>
				
				<input type="checkbox" style = {{"marginRight": "15px", "cursor" : "pointer"}} onClick = {handleCheckTask} defaultChecked={task.completed==='Completed'}/>
				<span className="material-icons-outlined" onClick = {() => deleteTask(task.id)}>delete</span>
				<span className="material-icons-outlined" onClick = {openEditForm}>edit</span>
				{!showDescription &&
					<span className="material-icons-outlined" onClick={() => setShowDescription(true)}>expand_more</span>
				}
				{showDescription &&
					<span className="material-icons-outlined" onClick={() => setShowDescription(false)}>expand_less</span>
				}
			</div>
		</div>
		{showDescription &&
			<div className = "task-desc">
				<p><b>Description:</b> {task.description}</p>
				<p><b>Due-date:</b> {task.duedate}</p>
				<p><b>Priority:</b> {task.priority}</p>
				<p><b>{task.completed}</b></p>
				<p><b>Project: {task.in_project}</b></p>
			</div>
		}
	 </div>
    }
	{showEditForm && 
		<Form 
			handleSubmit = {handleFormEdit}
			closeForm = {closeEditForm}
			task = {task}
			projects = {projects}
			projectToShow = {projectToShow}
		/>
	}			 	
	</>
	)
};

export default Tasks;