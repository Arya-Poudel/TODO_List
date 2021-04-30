import React from 'react';

const Form = ({handleSubmit, closeForm, task, projects, projectToShow}) => {

	let buttonText;
	if (task.name) {
		 buttonText = 'Save';
	} else {
		 buttonText = 'Add';
		 task.priority = 'neutral';
	}
	return(
		<div>
			<form className="form-wrapper" autoComplete="off" onSubmit={handleSubmit}>
				<label htmlFor = "name" className="input-query">Task Name*: </label>
				<input type="text" name="name" id="name" className="input-fields" defaultValue={task.name}required />
				
				<label htmlFor="description" className="input-query">Description: </label>
				<input type="text" name="description" id="description" className="input-fields" defaultValue={task.description}/>
				
				<label htmlFor = "duedate" className="input-query">Due Date: </label>
				<input type="date"  name="duedate" id="duedate" className="input-fields" defaultValue={task.duedate} />
				
				<div className="input-query">Priority:<br />
					<input type="radio" id="low" name="priority" value="low" defaultChecked={task.priority === 'low'}/>
					<label htmlFor="low">Low</label><br />
					<input type="radio" id="high" name="priority" value="high" defaultChecked={task.priority === 'high'}/>
					<label htmlFor="female">High</label><br />
					<input type="radio" id="neutral" name="priority" value="neutral" defaultChecked={task.priority === 'neutral'} />
					<label htmlFor="neutral">Neutral</label>
				</div>

				<label htmlFor = "in_project" className="input-query">Project: </label>
				<select name = "in_project" id = "in_project" className="input-field-select" defaultValue = {projectToShow}>
					{projects.map((project) => (
						<option value = {project.name} key={project.key}>{project.name} </option>
					))}
				</select>

				<div className="form-buttons">
					<button className="add-task-btn" type="submit">{buttonText}</button>
					<button className="close-form-btn" type="button" onClick = {closeForm}>Close</button>
				</div>
			</form>
		</div>
	)
}
export default Form;