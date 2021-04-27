import React from 'react';

const Navbar = () => {

	const showNav = () =>{
		const burger = document.querySelector('.burger');
		const nav = document.querySelector('.nav-links');
		//toggle nav
		nav.classList.toggle('nav-active');

		//burger animation
		burger.classList.toggle('toggle');
	}

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
				<li>Projects</li>
				<li>New Project</li>
			</ul>
		</div>
	)
}
export default Navbar;