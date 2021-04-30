import React from 'react';
import uniqid from 'uniqid';

const ProjectForm = ({addProject, projects}) => {

	// const [isProjectForm, setIsProjectForm] = useState(false);

	// const showProjectForm =() => {
		
	// }

	const handleProjectSubmit = (e) =>  {
		e.preventDefault();
		addProject({name: e.target.project_name.value, key: uniqid()});
		document.form1.reset();
	}

	return(
		<div className= "project-form">

			<form name="form1" className="project-form-wrapper" autoComplete="off" onSubmit={handleProjectSubmit}>
				<label htmlFor = "project_name">New Project: </label>
				<input type="text" name="project_name" id="project_name" placeholder="Name" required />
	
				<div className="form-buttons">
					<button className="add-task-btn" type="submit">Add</button>
				</div>
			</form>
			
		</div>
	)
}
export default ProjectForm;