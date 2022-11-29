import React from "react";

//create your first component
const Card = (props) => {
	return (
		<div className="card">
			<img src={props.src} className="card-img-top" alt=""></img>
			<div className="card-body  text-center">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.description}</p>
				<hr className="dropdown-divider"></hr>
				<a href="#" className="btn btn-primary">{props.button}</a>
			</div>
	  	</div>
	);
};

export default Card;